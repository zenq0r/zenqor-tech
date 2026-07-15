import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJyjvlm8jG-mT_1mDYsyF562L6XuskFxU",
    authDomain: "zenqor-web.firebaseapp.com",
    projectId: "zenqor-web",
    storageBucket: "zenqor-web.firebasestorage.app",
    messagingSenderId: "785478368719",
    appId: "1:785478368719:web:ef6fa34ed5d949ac2566ba"
};

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
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);
                
                let role = "user";

                if (userDoc.exists()) {
                    role = userDoc.data().role || "user";
                } else {
                    // AUTO-REPAIR: Jika data Role tiada, sistem akan bina secara automatik!
                    // E-mel zenqortech@gmail.com diiktiraf sebagai admin secara automatik
                    role = (user.email === "zenqortech@gmail.com") ? "admin" : "user";
                    await setDoc(userDocRef, {
                        name: user.displayName || "User",
                        email: user.email,
                        role: role,
                        createdAt: new Date()
                    });
                }

                // Semak Kebenaran Halaman
                if (requiredRole === 'admin' && role !== 'admin') {
                    // Jika user biasa cuba masuk admin panel, tendang ke user profile, BUKAN login
                    window.location.replace("user-profile.html"); 
                }
                
            } catch (error) {
                console.error("Security Check Failed:", error);
                // Buang redirect di sini untuk elak infinite loop jika internet perlahan
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