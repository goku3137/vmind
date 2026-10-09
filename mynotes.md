# TAGMANGO - RAZOR PAY INTEGRATION

graph TD
    A[Customer Pays on vmind.in] --> B[Pabbly Receives Payment Data]
    B --> C{Pabbly Router Checks 'notes.itemId'}
    C -->|itemId = 'marrywise-webinar'| D[TagMango: Unlock MarryWise Webinar]
    C -->|itemId = 'marrywise-complete'| E[TagMango: Unlock MarryWise Complete]
    C -->|itemId = 'dream-mind'| F[TagMango: Unlock Dream Mind]



Here is the complete step-by-step guide to connect Razorpay → Pabbly Connect → TagMango (learn.dreammind.in) so that every payment on your website automatically enrolls the customer into your course/workshop.

Prerequisites (Keep these 3 tabs open)
Pabbly Connect: connect.pabbly.com
TagMango Dashboard: learn.dreammind.in (Automation → Platform Integrations)
Razorpay Dashboard: dashboard.razorpay.com
Step 1: Add TagMango App to Pabbly
In your browser, open the TagMango invite link you saw in your dashboard: 👉 Click Here for TagMango Pabbly App
Click "Accept Invite & Add to Pabbly".
Step 2: Create a New Workflow in Pabbly
In Pabbly Connect, click the blue "Create Workflow" button.
Name it: vmind.in Razorpay to TagMango.
Click Create.
Step 3: Set up Trigger (Razorpay)
In Choose App, search and select Razorpay.
In Trigger Event, select Payment Captured.
Pabbly will display a Webhook URL (e.g. https://connect.pabbly.com/workflow/sendwebhookdata/...). Click Copy.
Connect it in Razorpay:
Open your Razorpay Dashboard.
In the bottom-left corner, click Account & Settings.
Under Website and app settings, click Webhooks.
Click the + Add New Webhook button.
In Webhook URL, paste the Pabbly URL you just copied.
In Active Events, check:
✅ payment.captured
Click Save.
Capture Sample Data in Pabbly:
Go back to the Pabbly tab — it will say "Waiting for Webhook Response".
Make one small test payment on vmind.in/razorpay (or use Razorpay Test Mode).
Within 3 seconds, Pabbly will capture the test payment data with customer's:
Name
Email
Phone
notes.itemId (e.g. marrywise-webinar)
Step 4: Set up Action (TagMango)
In Pabbly, click the + (Add Action Step) button below Razorpay.
In Choose App, search and select TagMango.
In Action Event, select Add Subscriber to Service / Workshop (or Enroll User).
Click Connect → Add New Connection.
It will ask for your TagMango API Key:
Go to your TagMango Dashboard → Automation → Platform Integrations → under Pabbly Connect, copy your Pabbly API Key.
Paste it into Pabbly and click Save.
Map the Customer Details:
In the fields that appear, map the values from the Razorpay step:
Service / Product: Select your TagMango course (e.g., MarryWise Webinar).
Customer Name: Click and select the Name from Step 1.
Customer Email: Click and select the Email from Step 1.
Customer Phone: Click and select the Phone number from Step 1.
Click Save & Send Test Request.
Pabbly will return Status: Success!
Step 5: Turn the Workflow ON
At the top right of Pabbly Connect, make sure the toggle is switched to ON (Simple Green).

What happens automatically now:
A customer pays on vmind.in/razorpay.
Razorpay alerts Pabbly Connect.
Pabbly creates the student's account inside learn.dreammind.in and unlocks the course/workshop.
TagMango sends an automated WhatsApp message and Email to the customer with their login password and dashboard link.
The customer logs in at https://learn.dreammind.in/web/dashboard with full access to their materials!


How to set this up in Pabbly (Takes 1 minute):
In Pabbly Connect, right after the Razorpay step, click the + button.
Search and select Router by Pabbly.
Create your routes:
Route 1: MarryWise Webinar
Condition: Set notes.itemId Equal to marrywise-webinar
Action: Select TagMango → Choose your MarryWise Webinar
Route 2: Complete Course
Condition: Set notes.itemId Equal to marrywise-complete
Action: Select TagMango → Choose your MarryWise Complete Program
Note: If you are only running one webinar right now, you don't even need a router. Simply select MarryWise Webinar in the TagMango step!

3. How the Customer Knows What is Unlocked
As soon as Pabbly triggers TagMango:

Automated WhatsApp & Email: TagMango automatically sends them a message:
"Hi [Name], your enrollment in MarryWise Webinar is confirmed! Your login email is [Email]. Click here to access: learn.dreammind.in/web/dashboard"

Inside their Student Dashboard (learn.dreammind.in):
The customer logs in with their email.
That specific course or workshop will now show an active green "Start Watching" or "Join Live Workshop" button instead of a locked lock icon. 