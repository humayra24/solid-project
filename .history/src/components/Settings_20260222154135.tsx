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
    const [draft, set]
    return (
        <main>
            
        </main>
    );
}