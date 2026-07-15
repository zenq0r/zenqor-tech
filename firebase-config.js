import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Gantikan dengan maklumat Firebase projek sebenar anda
const firebaseConfig = {
    apiKey: "AIzaSyCJyjvlm8jG-mT_1mDYsyF562L6XuskFxU",
    authDomain: "zenqor-web.firebaseapp.com",
    projectId: "zenqor-web",
    storageBucket: "zenqor-web.firebasestorage.app",
    messagingSenderId: "785478368719",
    appId: "1:785478368719:web:ef6fa34ed5d949ac2566ba"
};

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Fungsi Global: Semak RBAC (Role-Based Access Control)
export function enforceSecurity(requiredRole = null) {
    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            window.location.replace("login.html");
            return;
        }

        if (requiredRole) {
            try {
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    const role = userDoc.data().role;
                    if (role !== requiredRole && requiredRole === 'admin') {
                        // Jika bukan admin cuba masuk admin panel, tendang ke user profile
                        window.location.replace("user-profile.html");
                    }
                } else {
                    window.location.replace("login.html");
                }
            } catch (error) {
                console.error("Security Check Failed:", error);
                window.location.replace("login.html");
            }
        }
    });
}

// Fungsi Global: Logout Selamat
export async function secureLogout() {
    try {
        await signOut(auth);
        window.location.replace("login.html");
    } catch (error) {
        console.error("Logout Error:", error);
    }
}