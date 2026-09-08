/**
 * @file mailService.js
 * @description Centralized email dispatch service for handling form submissions.
 * Sends structured submission data to business@vakyalabs.com via FormSubmit AJAX API.
 * 
 * Features:
 * - Dynamic subject line matching the requested format: "From Academic Optoin - [Form Name]"
 * - Clean HTML table layout formatting in the received email
 * - Automatic _replyto mapping so responses go directly to the person who filled the form
 * - Captcha bypass for frictionless user experience
 */

const TARGET_EMAIL = 'business@vakyalabs.com';
const API_ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

/**
 * Dispatches form data to business@vakyalabs.com
 * 
 * @param {Object} params
 * @param {string} params.formName - Name of the form (e.g. "Consultation & Application Form", "Contact Us Form")
 * @param {string} [params.replyTo] - Email of the submitter for direct reply
 * @param {Object} params.data - Key-value map of form fields and answers
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitFormToEmail({ formName, replyTo, data }) {
  // Format requested: "From Academic Optoin and Form Name"
  const subject = `From Academic Optoin - ${formName}`;

  try {
    const payload = {
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      'Form Name': formName,
      'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ...data
    };

    if (replyTo) {
      payload._replyto = replyTo;
    }

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Form submission HTTP error:', response.status, errorText);
      throw new Error(`Submission failed with status ${response.status}`);
    }

    const result = await response.json();
    const isSuccess = result.success === true || result.success === 'true';

    // Handle initial one-time activation message gracefully
    if (!isSuccess && (result.message?.toLowerCase().includes('activation') || result.message?.toLowerCase().includes('activate'))) {
      console.warn('FormSubmit activation notice:', result.message);
      return {
        success: true,
        needsActivation: true,
        message: result.message
      };
    }

    return {
      success: isSuccess,
      message: result.message || (isSuccess ? 'Submission sent successfully.' : 'Unable to submit the form.')
    };
  } catch (error) {
    console.error('Error in submitFormToEmail:', error);
    return {
      success: false,
      message: error.message || 'Unable to submit the form. Please try again.'
    };
  }
}
