import { createSignal } from "solid-js";

type SettingsData = {
    notifications: boolean;
    darkMode: boolean;
    analytics: boolean;
    marketing: boolean;
}

export default function Settings() {
    
    const [settings, setSettings] = createSignal(...defaultSettings);
    return (
        <main>
            
        </main>
    );
}