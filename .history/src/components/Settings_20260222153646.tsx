

type SettingsData = {
    notifications: boolean;
    darkMode: boolean;
    analytics: boolean;
    
}

export default function Settings() {
    
    const [settings, setSettings] = createSignal(...defaultSettings);
    return (
        <main>
            
        </main>
    );
}