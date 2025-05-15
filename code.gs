/**
 * Google Apps Script Web App to create client folder structures inside a specified Drive folder.
 * 
 * Instructions:
 * - Replace 'YOUR_PARENT_FOLDER_ID_HERE' with the Google Drive folder ID where client folders will be created.
 * - Update the subfolder names array to your desired subfolders.
 * - Deploy as a web app via Google Apps Script to use.
 */

/**
 * Serves the HTML form for client folder creation.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Create Client Folder Structure');
}

/**
 * Creates a folder structure inside the specified parent folder for the client.
 * @param {string} clientName The name of the client folder to create.
 * @returns {string} Confirmation message.
 * @throws Will throw an error if clientName is empty or folder creation fails.
 */
function createFolders(clientName) {
  // TODO: Replace with your target parent folder ID in Google Drive
  const parentFolderId = "YOUR_PARENT_FOLDER_ID_HERE";

  if (!clientName || clientName.trim() === '') {
    throw new Error('Client name is required.');
  }

  const parentFolder = DriveApp.getFolderById(parentFolderId);
  const rootFolder = parentFolder.createFolder(clientName.trim());

  // TODO: Replace these subfolder names with your preferred structure
  const subFolders = [
    "sub_folder_#1",
    "sub_folder_#2",
    "sub_folder_#3",
    "sub_folder_#4",
    "sub_folder_#5",
    "sub_folder_#6",
    "sub_folder_#7"
  ];

  subFolders.forEach(name => rootFolder.createFolder(name));

  return `✅ Folder structure created for: ${clientName}`;
}
