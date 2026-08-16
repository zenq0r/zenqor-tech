import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Kongsi projek Firebase yang sama dengan zenqor-portal (zenqor-portal-a3b2d) — bukan
// untuk log masuk (zenqor-tech tiada fungsi login sendiri lagi; semua akses berautentikasi
// diarah ke zenqor-portal melalui butang "Portal"), tapi supaya kandungan awam (portfolio,
// services, contact messages) berkongsi satu pangkalan data Firestore/Storage.
const firebaseConfig = {
    apiKey: "AIzaSyDgoE8ckbVWqc1j6bHq1u1685_xJp0y09Y",
    authDomain: "zenqor-portal-a3b2d.firebaseapp.com",
    projectId: "zenqor-portal-a3b2d",
    storageBucket: "zenqor-portal-a3b2d.firebasestorage.app",
    messagingSenderId: "1065187936514",
    appId: "1:1065187936514:web:d05089d6668c58bf3e9a1b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
