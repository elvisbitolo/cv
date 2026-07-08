"use client";

import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Plus, Save, ShieldCheck } from "lucide-react";
import { auth, isFirebaseConfigured } from "@/lib/firebase";
import { getProjects, getSiteProfile, saveProfile, saveProject } from "@/lib/firestore-service";
import { profile as fallbackProfile } from "@/lib/profile-data";
import Link from "next/link";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [profile, setProfile] = useState(fallbackProfile);
  const [projects, setProjects] = useState(fallbackProfile.projects);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!auth) {
      setStatus("firebase-missing");
      return undefined;
    }
    return onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    async function loadAdminData() {
      if (!user) return;
      setStatus("loading");
      try {
        const [remoteProfile, remoteProjects] = await Promise.all([
          getSiteProfile(fallbackProfile),
          getProjects(fallbackProfile.projects)
        ]);
        setProfile(remoteProfile);
        setProjects(remoteProjects);
        setStatus("idle");
      } catch (error) {
        console.error(error);
        setStatus("load-error");
      }
    }
    loadAdminData();
  }, [user]);

  const profileJson = useMemo(() => JSON.stringify(profile, null, 2), [profile]);

  async function handleLogin(event) {
    event.preventDefault();
    if (!auth) {
      setStatus("firebase-missing");
      return;
    }
    setStatus("logging-in");
    try {
      await signInWithEmailAndPassword(auth, login.email, login.password);
      setStatus("idle");
    } catch (error) {
      console.error(error);
      setStatus("login-error");
    }
  }

  async function handleProfileSave(event) {
    event.preventDefault();
    setStatus("saving");
    try {
      await saveProfile(profile);
      for (const [index, project] of projects.entries()) {
        await saveProject({ ...project, rank: index + 1 });
      }
      setStatus("saved");
    } catch (error) {
      console.error(error);
      setStatus("save-error");
    }
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-paper px-4 py-10">
        <div className="mx-auto max-w-md rounded-md border border-ink/10 bg-white p-6 shadow-soft">
          <Link href="/" className="text-sm font-black text-copper">
            Back to portfolio
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <div className="rounded-md bg-moss/10 p-2 text-moss">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-black">Admin Login</h1>
              <p className="mt-1 text-sm text-ink/62">Use a Firebase Auth email and password account.</p>
            </div>
          </div>
          <form onSubmit={handleLogin} className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-bold">
              Email
              <input
                type="email"
                required
                value={login.email}
                onChange={(event) => setLogin({ ...login, email: event.target.value })}
                className="focus-ring min-h-12 rounded-md border border-ink/10 px-3"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Password
              <input
                type="password"
                required
                value={login.password}
                onChange={(event) => setLogin({ ...login, password: event.target.value })}
                className="focus-ring min-h-12 rounded-md border border-ink/10 px-3"
              />
            </label>
            <button className="focus-ring min-h-11 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-moss">
              {status === "logging-in" ? "Signing in" : "Sign in"}
            </button>
            {!isFirebaseConfigured ? (
              <p className="text-sm font-bold text-copper">Firebase environment variables are missing.</p>
            ) : null}
            {status === "login-error" ? <p className="text-sm font-bold text-copper">Could not sign in. Check your Firebase Auth user.</p> : null}
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper py-8">
      <form onSubmit={handleProfileSave} className="section-shell grid gap-6">
        <div className="flex flex-col gap-4 rounded-md border border-ink/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-sm font-black text-copper">
              Back to portfolio
            </Link>
            <h1 className="mt-2 text-3xl font-black">Portfolio Admin</h1>
            <p className="mt-1 text-sm text-ink/62">Edit profile details and seed Firestore projects.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => auth && signOut(auth)}
              className="focus-ring rounded-md border border-ink/10 px-4 py-2 text-sm font-bold"
            >
              Sign out
            </button>
            <button className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-moss">
              <Save size={17} />
              Save to Firestore
            </button>
          </div>
        </div>

        <section className="rounded-md border border-ink/10 bg-white p-5">
          <h2 className="text-xl font-black">Profile</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <TextInput label="Name" value={profile.name} onChange={(name) => setProfile({ ...profile, name })} />
            <TextInput label="Role" value={profile.role} onChange={(role) => setProfile({ ...profile, role })} />
            <TextInput label="Email" value={profile.email} onChange={(email) => setProfile({ ...profile, email })} />
            <TextInput label="Location" value={profile.location} onChange={(location) => setProfile({ ...profile, location })} />
          </div>
          <label className="mt-4 grid gap-2 text-sm font-bold">
            Summary
            <textarea
              rows={5}
              value={profile.summary}
              onChange={(event) => setProfile({ ...profile, summary: event.target.value })}
              className="focus-ring rounded-md border border-ink/10 p-3"
            />
          </label>
          <details className="mt-5 rounded-md border border-ink/10 p-4">
            <summary className="cursor-pointer text-sm font-black">Advanced JSON view</summary>
            <pre className="mt-4 overflow-auto rounded-md bg-ink p-4 text-xs leading-6 text-white">{profileJson}</pre>
          </details>
        </section>

        <section className="rounded-md border border-ink/10 bg-white p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-black">Projects</h2>
            <button
              type="button"
              onClick={() =>
                setProjects([
                  ...projects,
                  { title: "New Project", category: "Web", description: "", stack: ["Next.js"], github: "", live: "" }
                ])
              }
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-ink/10 px-4 py-2 text-sm font-bold"
            >
              <Plus size={17} />
              Add project
            </button>
          </div>
          <div className="mt-5 grid gap-5">
            {projects.map((project, index) => (
              <div key={`${project.title}-${index}`} className="rounded-md border border-ink/10 bg-paper p-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <TextInput
                    label="Title"
                    value={project.title}
                    onChange={(title) => updateProject(index, { ...project, title })}
                  />
                  <TextInput
                    label="Category"
                    value={project.category}
                    onChange={(category) => updateProject(index, { ...project, category })}
                  />
                  <TextInput
                    label="GitHub"
                    value={project.github}
                    onChange={(github) => updateProject(index, { ...project, github })}
                  />
                  <TextInput
                    label="Live URL"
                    value={project.live}
                    onChange={(live) => updateProject(index, { ...project, live })}
                  />
                </div>
                <label className="mt-4 grid gap-2 text-sm font-bold">
                  Description
                  <textarea
                    rows={4}
                    value={project.description}
                    onChange={(event) => updateProject(index, { ...project, description: event.target.value })}
                    className="focus-ring rounded-md border border-ink/10 p-3"
                  />
                </label>
                <TextInput
                  label="Stack, comma separated"
                  value={project.stack.join(", ")}
                  onChange={(stack) => updateProject(index, { ...project, stack: stack.split(",").map((item) => item.trim()).filter(Boolean) })}
                  className="mt-4"
                />
              </div>
            ))}
          </div>
          {status === "loading" ? <p className="mt-4 text-sm font-bold text-moss">Loading Firestore data...</p> : null}
          {status === "load-error" ? <p className="mt-4 text-sm font-bold text-copper">Could not load Firestore data.</p> : null}
          {status === "saved" ? <p className="mt-4 text-sm font-bold text-moss">Saved successfully.</p> : null}
          {status === "save-error" ? <p className="mt-4 text-sm font-bold text-copper">Save failed. Check Firestore rules.</p> : null}
        </section>
      </form>
    </main>
  );

  function updateProject(index, nextProject) {
    setProjects(projects.map((project, currentIndex) => (currentIndex === index ? nextProject : project)));
  }
}

function TextInput({ label, value, onChange, className = "" }) {
  return (
    <label className={`grid gap-2 text-sm font-bold ${className}`}>
      {label}
      <input
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring min-h-12 rounded-md border border-ink/10 bg-white px-3"
      />
    </label>
  );
}
