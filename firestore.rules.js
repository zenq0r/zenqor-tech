rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Fungsi untuk menyemak sama ada pengguna adalah admin
    function isAdmin() {
      return request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // 1. Koleksi Pengguna (RBAC & Profil)
    match /users/{userId} {
      // Pengguna boleh baca/tulis dokumen sendiri. Admin boleh buat semua.
      allow read: if request.auth != null && (request.auth.uid == userId || isAdmin());
      allow write: if request.auth != null && request.auth.uid == userId;
      allow delete: if isAdmin();
    }

    // 2. Koleksi Awam (Portfolio, Services, Careers, Company Profile)
    match /{collection}/{document=**} {
      // Sesiapa sahaja boleh baca (untuk paparan website public)
      allow read: if true;
      // Hanya admin boleh tambah, edit atau padam
      allow write, delete: if isAdmin();
    }
  }
}