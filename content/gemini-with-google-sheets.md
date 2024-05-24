---
title: 'Gemini with Google Sheets'
description: 'This CodeLab demonstrates use of Gemini API with Google Sheets'
slug: 'gemini-with-google-sheets'
authors:
  [
    {
      name: "Vrijraj Singh",
      image: "/authors/vrijraj.jpeg",
      socials:
        {
          linkedin: "https://www.linkedin.com/in/vrijrajsingh/",
          github: "https://github.com/vrijraj",
          web: "https://vrijraj.xyz",
        }
    },
  ]
date: 2024-05-24
categories: 'Technology'
duration: 30
image: '/codelabs/gemini-with-google-sheets/gemini-with-google-sheets.png'
tags: ['Gemini', 'Google Sheets']
draft: false
---

# Introduction 
In this lab session, you'll be leveraging the Gemini API in Google Sheets.

##### What you'll need
- Google AI Studio for API Key
- Google Account

##### What you'll learn
- Implement Gemini API in Goolge Sheets
- Google AppScript
- Propmt Engineering.

#### Understanding the Process
We will design the architecture for Calling Gemini API in the following way:
1. Collect the data from Goolge Sheets using Google App Script
1. Call the Gemini API in Google AppScript Function
1. Save response to Google Sheets

# Get Gemini API Key

Now, let's get an API Key to access the Gemini Pro APIs.

1. Go to to [Google AI Studio](https://aistudio.google.com/app/apikey){:target="_blank"}
1. Click on Get API Key
1. Store the key safely.

# Setup Google Sheets and Collect Data

1. Open New Google Sheets via [sheets.new](https://sheets.new){:target="_blank"}
1. In your Google Sheet, Open AppScript from Sheet, you can get this options under `Extensions>App Script` menus
1. We'll work on `code.gs` file. You can remove all the code.
1. Now we need to collect the data from Google Sheet

```js
// Function to Collect the data from First Column (A)
function updateAnswers() {
  var sheetId = ''; // Replace 'SHEET_ID' with the ID of your Google Sheet
  var sheetName = 'Sheet1'; // Replace 'SHEET_NAME' with the name of your sheet

  var spreadsheet = SpreadsheetApp.openById(sheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);

  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();

  var questionColumnIndex = 1; // Assuming question column is the first column (A)
  var answerColumnIndex = 2; // Assuming answer column is the second column (B)
  var status = 3

  for (var i = 1; i <= lastRow; i++) {
    var question = sheet.getRange(i, questionColumnIndex).getValue();
    // question is the value from Column A
    Looger.log(question)
    if(!sheet.getRange(i, answerColumnIndex).getValue().length){
      // Call your function to get the answer
    }
  }
}
```

# Call Gemini API

Now we'll create a new functions named `getAnswerForQuestion` where we can pass the parameters as question in `code.gs` file

```js
// Function to get answer for a question (you should implement this function)
function getAnswerForQuestion(question) {
  // Replace with your actual API Key
  var key = "YOUR_KEY"
  var url = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=' + key; 
  
  var payload = { "contents": [{ "parts": [{ "text": question+ ' and show me response in 50 words' }] }] };
  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var jsonResponse = JSON.parse(response.getContentText());
    return jsonResponse.candidates[0].content.parts[0].text;
  } catch (error) {
    return "API call failed: " + error.toString();
  }
}
```

You can call this `getAnswerForQuestion()` functions inside `updateAnswers()` when we collect the data from column, and the `updateAnswers()` will be

```js
// Function to Collect the data from First Column (A)
function updateAnswers() {
  var sheetId = ''; // Replace 'SHEET_ID' with the ID of your Google Sheet
  var sheetName = 'Sheet1'; // Replace 'SHEET_NAME' with the name of your sheet

  var spreadsheet = SpreadsheetApp.openById(sheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);

  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();

  var questionColumnIndex = 1; // Assuming question column is the first column (A)
  var answerColumnIndex = 2; // Assuming answer column is the second column (B)
  var status = 3

  for (var i = 1; i <= lastRow; i++) {
    var question = sheet.getRange(i, questionColumnIndex).getValue();
    // question is the value from Column A
    if(!sheet.getRange(i, answerColumnIndex).getValue().length){
      // Call your function to get the answer
      var answer = getAnswerForQuestion(question); 
      // Update answer in the sheet
      sheet.getRange(i, answerColumnIndex).setValue(answer);
      sheet.getRange(i, status).setValue('Added');
    }
  }
}
```
Here we have updated the answer in the sheet with respective column

Overall your `code.gs` file would be

```js
// Function to Collect the data from First Column (A)
function updateAnswers() {
  var sheetId = ''; // Replace 'SHEET_ID' with the ID of your Google Sheet
  var sheetName = 'Sheet1'; // Replace 'SHEET_NAME' with the name of your sheet

  var spreadsheet = SpreadsheetApp.openById(sheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);

  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();

  var questionColumnIndex = 1; // Assuming question column is the first column (A)
  var answerColumnIndex = 2; // Assuming answer column is the second column (B)
  var status = 3

  for (var i = 1; i <= lastRow; i++) {
    var question = sheet.getRange(i, questionColumnIndex).getValue();
    // question is the value from Column A
    if(!sheet.getRange(i, answerColumnIndex).getValue().length){
      // Call your function to get the answer
      var answer = getAnswerForQuestion(question); 
      // Update answer in the sheet
      sheet.getRange(i, answerColumnIndex).setValue(answer);
      sheet.getRange(i, status).setValue('Added');
    }
  }
}

// Function to get answer for a question (you should implement this function)
function getAnswerForQuestion(question) {
  // Replace with your actual API Key
  var key = "YOUR_KEY"
  var url = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=' + key; 
  
  var payload = { "contents": [{ "parts": [{ "text": question+ ' and show me response in 50 words' }] }] };
  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var jsonResponse = JSON.parse(response.getContentText());
    return jsonResponse.candidates[0].content.parts[0].text;
  } catch (error) {
    return "API call failed: " + error.toString();
  }
}

```



# Setup Trigger onEdit Sheet

As the final step, you need to set up the onEdit trigger to execute whenever edits are made to your Google Sheet. To do this, click on the `clock icon` in the Apps Script interface to access the triggers section for your Apps Script.

1. Click on `Add Trigger` Button
1. Select Function `updateAnswers()`
1. Select event source `From Spreadsheet`
1. Select event type `on edit`
1. Click on Save Button


Now you can test the sheet
When you add any question in colum A, it will goes to Gemini API and get the response

# Conclusion
We learned how to integrate a Gemini API with Google Sheets. It's evident that Gemini can provide varied results, but refining the response is possible through improved writing prompts. Whether a developer is experienced or not, anyone can utilize Gemini to construct utility tools.<br />


Enjoy coding with Gemini!