import { createSignal } from "solid-js";

type SettingsData = {
    notifications: boolean;
    darkMode: boolean;
    analytics: boolean;
    marketing: boolean;
}

const defaultSettings: SettingsData = {
    notifications: false,
    darkMode: false,
    analytics: false,
    marketing: false
};

export default function Settings() {
    
    const [settings, setSettings] = createSignal<SettingsData>({...defaultSettings});
    const [isEditing, setIsEditing] = createSignal(false);
    const [draft, setDraft] = createSignal<SettingsData>({...defaultSettings});
    
    function startEdit() {
    setDraft({ ...settings() });
    setIsEditing(true);
  }

  function save() {
    setSettings({ ...draft() });
    setIsEditing(false);
  }

  function cancel() {
    setDraft({ ...settings() });
    setIsEditing(false);
  }

  function toggleDraft(key: keyof SettingsData) {
    setDraft(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const labels: Record<keyof SettingsData, string> = {
    notifications: "Email notifications",
    darkMode: "Dark mode",
    analytics: "Usage analytics",
    marketing: "Marketing emails",
  };

  return (
    <div class="settings-card">
      <div class="settings-header">
        <h2 class="settings-title">Settings</h2>
        <p class="settings-subtitle">Manage your preferences</p>
      </div>

      <ul class="settings-list">
        {(Object.keys(labels) as (keyof SettingsData)[]).map(key => (
          <li class="settings-item">
            <label
              class="settings-label"
              classList={{ "settings-label--editing": isEditing() }}
            >
              <input
                type="checkbox"
                checked={isEditing() ? draft()[key] : settings()[key]}
                disabled={!isEditing()}
                onChange={() => isEditing() && toggleDraft(key)}
                class="settings-checkbox"
              />
              <span class="settings-label-text">{labels[key]}</span>
            </label>
          </li>
        ))}
      </ul>

      <div class="settings-actions">
        {!isEditing() ? (
          <button type="button" class="settings-btn settings-btn--primary" onClick={startEdit}>
            Edit
          </button>
        ) : (
          <>
            <button type="button" class="settings-btn settings-btn--primary" onClick={save}>
              Save
            </button>
            <button type="button" class="settings-btn settings-btn--secondary" onClick={cancel}>
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}