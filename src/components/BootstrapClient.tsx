"use client";

// Importing the JavaScript file from Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// This component does not render anything, it's just for importing Bootstrap's JS
export default function BootstrapClient() {
  // Pastikan tidak ada require() di sini atau di import statement di atas
  // useEffect(() => {
  //   // Optional: Anda bisa inisialisasi komponen Bootstrap di sini jika perlu
  //   // misalnya: const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  //   // const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   //   return new bootstrap.Tooltip(tooltipTriggerEl)
  //   // })
  // }, []);

  return null; // Komponen ini tidak perlu merender apapun
} 