/**
 * Google Apps Script for Contact Form
 * 
 * This script receives form data from your portfolio website
 * and saves it to your Google Sheet.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Paste this entire code
 * 4. Save the project
 * 5. Deploy as Web App (see CONTACT_FORM_SETUP_GUIDE.md for details)
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Extract form data
    const name = data.name || '';
    const email = data.email || '';
    const message = data.message || '';
    
    // Add a new row with the data
    // Format: [Timestamp, Name, Email, Message]
    sheet.appendRow([
      timestamp,
      name,
      email,
      message
    ]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: Test function to verify the script works
 * Run this from the Apps Script editor to test
 */
function testDoPost() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}


