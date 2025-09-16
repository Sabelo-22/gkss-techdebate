const table = document.getElementById("participantsTable");

db.collection("registrations").orderBy("timestamp", "desc").onSnapshot(snapshot => {
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Institution</th>
      <th>Registered At</th>
    </tr>
  `;

  snapshot.forEach(doc => {
    const data = doc.data();
    const row = `
      <tr>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.institution}</td>
        <td>${data.timestamp.toDate().toLocaleString()}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
});
