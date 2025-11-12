/**
 * Google Apps Script for Contact Form - Production Version
 * 
 * This script receives form data from your portfolio website
 * and saves it to your Google Sheet with validation and error handling.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Paste this entire code
 * 4. Save the project
 * 5. Deploy as Web App:
 *    - Click "Deploy" → "New deployment"
 *    - Select "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy" and copy the Web App URL
 */

/**
 * Main handler for POST requests from the contact form
 * @param {Object} e - Event object containing POST data
 * @returns {TextOutput} JSON response with success/error status
 */
function doPost(e) {
  try {
    // Validate request has data
    if (!e || !e.postData || !e.postData.contents) {
      return createErrorResponse('Invalid request: No data received');
    }

    // Parse the incoming JSON data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return createErrorResponse('Invalid JSON format');
    }

    // Validate required fields
    const validationError = validateFormData(data);
    if (validationError) {
      return createErrorResponse(validationError);
    }

    // Sanitize and extract form data
    const name = sanitizeInput(data.name || '');
    const email = sanitizeInput(data.email || '').toLowerCase().trim();
    const message = sanitizeInput(data.message || '');
    
    // Validate email format
    if (!isValidEmail(email)) {
      return createErrorResponse('Invalid email format');
    }

    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Verify sheet has correct headers (optional check)
    ensureHeaders(sheet);
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Add a new row with the data
    // Format: [Timestamp, Name, Email, Message]
    sheet.appendRow([
      timestamp,
      name,
      email,
      message
    ]);

    // Log successful submission (for monitoring)
    Logger.log(`Form submission saved: ${email} at ${timestamp}`);

    // Return success response
    return createSuccessResponse('Data saved successfully');
    
  } catch (error) {
    // Log error for debugging
    Logger.log(`Error in doPost: ${error.toString()}`);
    Logger.log(`Stack trace: ${error.stack}`);
    
    // Return generic error (don't expose internal errors to client)
    return createErrorResponse('An error occurred while saving data. Please try again.');
  }
}

/**
 * Validates form data before processing
 * @param {Object} data - Form data object
 * @returns {string|null} Error message or null if valid
 */
function validateFormData(data) {
  if (!data) {
    return 'No data provided';
  }

  // Check required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return 'Name is required';
  }

  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    return 'Email is required';
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    return 'Message is required';
  }

  // Check field lengths (prevent abuse)
  if (data.name.length > 100) {
    return 'Name is too long (max 100 characters)';
  }

  if (data.email.length > 255) {
    return 'Email is too long (max 255 characters)';
  }

  if (data.message.length > 5000) {
    return 'Message is too long (max 5000 characters)';
  }

  return null; // Valid
}

/**
 * Validates email format using regex
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitizes input to prevent injection attacks
 * @param {string} input - Input string to sanitize
 * @returns {string} Sanitized string
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') {
    return '';
  }
  
  // Remove leading/trailing whitespace
  let sanitized = input.trim();
  
  // Remove any script tags or dangerous characters
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Limit length to prevent abuse
  if (sanitized.length > 5000) {
    sanitized = sanitized.substring(0, 5000);
  }
  
  return sanitized;
}

/**
 * Ensures the sheet has proper headers in row 1
 * @param {Sheet} sheet - Google Sheet object
 */
function ensureHeaders(sheet) {
  const headerRow = sheet.getRange(1, 1, 1, 4).getValues()[0];
  const expectedHeaders = ['Timestamp', 'Name', 'Email', 'Message'];
  
  // Check if headers exist, if not, add them
  if (!headerRow[0] || headerRow[0].toString().toLowerCase() !== 'timestamp') {
    sheet.getRange(1, 1, 1, 4).setValues([expectedHeaders]);
    // Format header row
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    sheet.getRange(1, 1, 1, 4).setBackground('#f0f0f0');
  }
}

/**
 * Creates a success JSON response
 * @param {string} message - Success message
 * @returns {TextOutput} JSON response
 */
function createSuccessResponse(message) {
  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      message: message,
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Creates an error JSON response
 * @param {string} errorMessage - Error message
 * @returns {TextOutput} JSON response
 */
function createErrorResponse(errorMessage) {
  return ContentService.createTextOutput(
    JSON.stringify({
      success: false,
      error: errorMessage,
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify the script works
 * Run this from the Apps Script editor to test
 */
function testDoPost() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message for production validation'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Test Result: ' + result.getContent());
  
  // Verify the data was saved
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();
  const lastRowData = sheet.getRange(lastRow, 1, 1, 4).getValues()[0];
  Logger.log('Last row data: ' + lastRowData);
}


