let walletBalance = 2000;
let currentFare = 0;
let currentCab = '';
let fromLocation = '';
let toLocation = '';
function rechargeWallet() {
  const amount = parseInt(document.getElementById('rechargeAmount').value);
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid recharge amount.');
    return;
  }
  walletBalance += amount;
  document.getElementById('walletBalance').textContent = walletBalance;
  document.getElementById('rechargeAmount').value = '';
  alert('Wallet recharged successfully!');
}
function bookCab(cabName, fare) {
  const from = document.getElementById('fromInput').value.trim();
  const to = document.getElementById('toInput').value.trim();
  if (!from || !to) {
    alert('Please enter both From and To locations before booking.');
    return;
  }
  currentCab = cabName;
  currentFare = fare;
  fromLocation = from;
  toLocation = to;
  document.getElementById('bookingInfo').classList.remove('hidden');
  document.getElementById('bookingCab').textContent = cabName;
  document.getElementById('bookingFare').textContent = fare;
  document.getElementById('fromLocation').textContent = from;
  document.getElementById('toLocation').textContent = to;
  alert(`Cab booked: ${cabName}. Please proceed to payment.`);
}
function payViaUPI() {
  const upiId = document.getElementById('upiId').value.trim();
  if (!upiId) {
    alert('Please enter your UPI ID.');
    return;
  }
  if (walletBalance < currentFare) {
    alert('Insufficient wallet balance. Please recharge your wallet.');
    return;
  }
  walletBalance -= currentFare;
  document.getElementById('walletBalance').textContent = walletBalance;
  alert(`Payment successful via UPI (${upiId}) for ${currentCab} from ${fromLocation} to ${toLocation}. Enjoy your ride!`);
  document.getElementById('bookingInfo').classList.add('hidden');
  document.getElementById('upiId').value = '';
  document.getElementById('fromInput').value = '';
  document.getElementById('toInput').value = '';
}
