var EMAIL_TEMPLATE_DOC_URL = 'https://docs.google.com/document/d/15TOXTSzsCipAGHr6cAMTqYevCYUdGIA79Ki7JxYXc98/edit#heading=h.85utr1c24zzb';
var EMAIL_SUBJECT = 'Sign up for a house viewing at 126 Jordan St., Santa Cruz';

/**
 * Installs a trigger on the Spreadsheet for when a Form response is submitted.
 */
function installTrigger() {
  ScriptApp.newTrigger('onFormSubmit')
      .forSpreadsheet(SpreadsheetApp.getActive())
      .onFormSubmit()
      .create();
}

/**
 * Sends a customized email for every response on a form.
 *
 * {Object} event - Form submit event
 */
function onFormSubmit(e) {
  var responses = e.namedValues;

  // If the question title is a label, it can be accessed as an object field.
  // If it has spaces or other characters, it can be accessed as a dictionary.
  var timestamp = responses.Timestamp[0];
  var email = responses['Email Address'][0].trim();
  var firstName = responses['🥇 What is your first name?'][0].trim();
  var lastName = responses['🗻 What is your last name?'][0].trim();

  var status = '';
  if (isFit(responses)) {
    console.log(firstName+ ' ' + lastName +' could be a good fit!')
    sendEmail(email, firstName)
    status = 'Sent';
  }
  else {
    console.log(firstName+ ' ' + lastName +' is not a good fit :(')
  }

  // Append the status on the spreadsheet to the responses' row.
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = sheet.getActiveRange().getRow();
  var column = e.values.length + 1;
  console.log(column);
  sheet.getRange(row, column).setValue(status);

  console.log("status=" + status + "; responses=" + JSON.stringify(responses));
}

/**
 * Creates email body and includes the links based on topic.
 *
 * @ param {string} recipient - The recipient's email address.
 * @ param {string[]} topics - List of topics to include in the email body.
 * @ return {string} - The email body as an HTML string.
 */
function createEmailBody(name){
  // Make sure to update the emailTemplateDocId at the top.
  var docId = DocumentApp.openByUrl(EMAIL_TEMPLATE_DOC_URL).getId();
  var emailBody = docToHtml(docId);
  emailBody = emailBody.replace(/{{NAME}}/g, name);
  //emailBody = emailBody.replace(/{{TOPICS}}/g, topicsHtml);
  return emailBody;
}

function sendBacklogEmails(){
  var sheet = SpreadsheetApp.getActiveSheet();

  var lastRow = sheet.getLastRow();
  var lastCol = sheet.getLastColumn();

  var range = sheet.getRange(1, 1, lastRow, lastCol);
  var data = range.getValues();

  var activeRow = 0;

  for (row in data) {
    if (data[row][29] === 'Send') {
      sendEmail(data[row][1], data[row][2])
    }
  }
}

function sendEmail(email, name) {
  MailApp.sendEmail({
    to: email,
    subject: EMAIL_SUBJECT,
    htmlBody: createEmailBody(name),//, topics),
  });
}


function docToHtml(docId) {

  // Downloads a Google Doc as an HTML string.
  var url = "https://docs.google.com/feeds/download/documents/export/Export?id=" +
            docId + "&exportFormat=html";
  var param = {
    method: "get",
    headers: {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
    muteHttpExceptions: true,
  };
  return UrlFetchApp.fetch(url, param).getContentText();
}

function isFit(responses){
  var hasPet = responses['🐈 Do you have any pets?'][0].trim();
  var musicLevel = responses['🎵 How loud do you like your music?'][0].trim();
  var cleanLevel = responses['🧹 How clean do you need things to be?'][0].trim();
  var leaseTerms = responses['📅 How long do you plan to stay?'][0].trim();

  if(hasPet ==='No' && musicLevel<5 && cleanLevel<5 && leaseTerms === '12+ months'){
    return true;
  } else {
    return false;
  }
}
