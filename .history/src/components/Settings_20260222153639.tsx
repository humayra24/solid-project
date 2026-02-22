

type SettingsData = {
    notifications: boolean;
    darkMode: boolean;
    
    
}

export default function Settings() {
    
    const [settings, setSettings] = createSignal(...defaultSettings);
    return (
        <main>
            
        </main>
    );
}