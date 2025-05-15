# Google Drive Client Folder Creator

This Google Apps Script web app creates a predefined folder structure inside a specified Google Drive folder for a given client name.

## Setup

1. Open the Apps Script project.
2. Replace `YOUR_PARENT_FOLDER_ID_HERE` in `Code.gs` with your Google Drive parent folder ID.
3. Modify the `subFolders` array if you want to change subfolder names.
4. Deploy the project as a **Web App**:
   - Execute as: **Me**
   - Who has access: **Anyone with the link**
5. Open the Web App URL and enter the client name to create folders.

## Folder structure created

Folder
- Sub Folder #1
- Sub Folder #2
- Sub Folder #3
- Sub Folder #4
- Sub Folder #5
- Sub Folder #6
- Sub Folder #7

## Files

- `Code.gs`: Server-side Google Apps Script code.
- `Index.html`: HTML form UI for folder creation.

---

Feel free to customize as needed!
