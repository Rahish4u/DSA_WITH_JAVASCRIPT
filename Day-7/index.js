const dummyData = {
  "1234-1234-1234": {
    name: "Rahish Ali",
    pan: "ABCDE1234F"
  },
  "5678-5678-5678": {
    name: "Aniket Kumar",
    pan: "XYZAB1234P"
  }
};

document.getElementById("kycForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const aadhaar = document.getElementById("aadhaar").value.trim();
  const pan = document.getElementById("pan").value.trim();
  const result = document.getElementById("result");

  if (dummyData[aadhaar] && dummyData[aadhaar].name === name && dummyData[aadhaar].pan === pan) {
    result.innerHTML = `<p class="verified">✅ KYC Verified Successfully</p>`;
  } else {
    result.innerHTML = `<p class="failed">❌ KYC Verification Failed</p>`;
  }

  // Optional: Store verified KYC in localStorage
  localStorage.setItem("lastKYC", JSON.stringify({ name, aadhaar, pan, status: result.textContent }));
});
