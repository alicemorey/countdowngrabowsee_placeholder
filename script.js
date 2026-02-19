function openModal(imageSrc, captionText) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.textContent = captionText;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Function to close date modal
function closeDateModal() {
  document.getElementById('dateModal').style.display = 'none';
}


function openDateModal(title, data) {
  const modal = document.getElementById('dateModal');
  const modalContent = document.getElementById('dateModalContent');
  
  // Clear previous content
  modalContent.innerHTML = '';
  
  // Add title
  const titleElement = document.createElement('h3');
  titleElement.id = 'dateModalTitle';
  titleElement.textContent = title;
  modalContent.appendChild(titleElement);
  
  // Add month if provided
  if (data.month) {
      const monthElement = document.createElement('p');
      monthElement.textContent = data.month;
      monthElement.style.fontWeight = 'bold';
      modalContent.appendChild(monthElement);
  }
  
  // Add participants section if provided
  if (data.participants && data.participants.length > 0) {
      const participantsHeading = document.createElement('h4');
      participantsHeading.textContent = 'The participants:';
      modalContent.appendChild(participantsHeading);
      
      const participantsList = document.createElement('ul');
      participantsList.className = 'modal-list';
      data.participants.forEach(participant => {
          const listItem = document.createElement('li');
          listItem.textContent = participant;
          participantsList.appendChild(listItem);
      });
      modalContent.appendChild(participantsList);
  }
  
  // Add team section if provided
  if (data.team && data.team.length > 0) {
      const teamHeading = document.createElement('h4');
      teamHeading.textContent = 'The team:';
      modalContent.appendChild(teamHeading);
      
      const teamList = document.createElement('ul');
      teamList.className = 'modal-list';
      data.team.forEach(member => {
          const listItem = document.createElement('li');
          listItem.textContent = member;
          teamList.appendChild(listItem);
      });
      modalContent.appendChild(teamList);
  }
  
  // Display the modal
  modal.style.display = 'block';
}
