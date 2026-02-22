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
    const [isEditing, set]
    return (
        <main>
            
        </main>
    );
}