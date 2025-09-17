const aiTechniquesMarkdown = `# CHAI Hackathon: Core AI Techniques Explained

Hi Team,

As we prepare for the hackathon, it's really important for all of us, coders and non-coders alike, to understand some basic Artificial Intelligence (AI) concepts. These are the building blocks of the solutions we'll be creating. Don't worry about the technical jargon; think of these as "smart tools" that help computers do amazing things.

Here are the main AI techniques we've seen pop up across our research:

#### 1. Natural Language Processing (NLP)

*   **What it is:** Imagine teaching a computer to understand human language – the way we speak, write, and even text. That's NLP. It helps computers read, interpret, and even generate text and speech.
*   **How it helps in Africa:**
    *   **Breaking Language Barriers:** Think about all the different languages spoken across Africa. NLP can translate educational materials into local dialects, or convert written health reports into a common language for analysis.
    *   **Understanding Conversations:** It can power chatbots that answer customer questions in their local language or sift through doctor\'s notes to find important medical information.
*   **Examples from Case Studies:**
    *   **Education:** The AI learning platform could translate lesson instructions into Somali for Fatuma, and its text-to-speech feature read story problems aloud in her native tongue.
    *   **Healthcare:** An NLP module scanned WhatsApp messages from health worker groups for disease keywords (in English and Swahili) to aid in outbreak detection.
    *   **Insurance:** NLP can read claim descriptions to extract key details automatically.

#### 2. Computer Vision

*   **What it is:** This is about teaching computers to "see" and interpret images and videos, just like humans do. It helps them recognize objects, faces, patterns, and even assess damage.
*   **How it helps in Africa:**
    *   **Spotting Fraud:** In areas like insurance, it can quickly identify if someone is submitting a fake picture of an accident or trying to use the same photo for multiple claims.
    *   **Damage Assessment:** For insurance claims, it can estimate the cost of repairs from photos, speeding up payouts.
    *   **Health Diagnostics (Potential):** In the future, it could help in basic diagnostics from images (though this wasn\'t a primary focus in our case studies yet).
*   **Examples from Case Studies:**
    *   **Insurance:** The AI system used a computer vision tool to analyze images of vehicle damage, detecting if the same damage picture was reused in different claims. For agricultural claims, it could verify the authenticity and extent of loss from a farmer\'s photo.

#### 3. Predictive Analytics / Anomaly Detection

*   **What it is:** These are like having a super-smart detective that constantly looks for unusual patterns or predicts what might happen next based on past information.
    *   **Predictive Analytics:** Uses historical data to forecast future events (e.g., predicting where an outbreak might occur next).
    *   **Anomaly Detection:** Spots things that are out of the ordinary (e.g., a strange transaction in your bank account).
*   **How it helps in Africa:**
    *   **Early Warnings:** Crucial for health, detecting early signs of disease outbreaks before they spread widely. Also, for insurance, predicting risks like droughts.
    *   **Fighting Fraud:** Instantly flagging suspicious financial transactions that don\'t match a person\'s usual behavior.
    *   **Resource Management:** Predicting where medical supplies or teachers might be needed, helping to allocate resources more effectively.
*   **Examples from Case Studies:**
    *   **Healthcare:** The AI model monitored health reports for unusual patterns (e.g., a spike in diarrhoea cases) to detect potential cholera outbreaks early.
    *   **Finance:** Real-time anomaly detection flagged unusual logins or transactions (like a large transfer at 2 AM from a new device) that indicated SIM swap fraud.
    *   **Insurance:** Dynamic risk prediction analyzed weather forecasts and farm data to offer personalized drought insurance.

#### 4. Voice Biometrics

*   **What it is:** This technology recognizes and verifies a person\'s identity based on their unique voice patterns. It\'s like a voice fingerprint.
*   **How it helps in Africa:**
    *   **Secure Transactions:** Provides an extra layer of security for financial transactions, especially when traditional PINs or passwords can be compromised.
    *   **Accessibility:** For users with basic phones or low literacy, using their voice can be a much simpler and more secure way to verify their identity than typing.
*   **Examples from Case Studies:**
    *   **Finance:** When a suspicious transaction was flagged, the AI system requested a voice passphrase to confirm the user\'s identity, preventing SIM swap fraudsters from emptying accounts.

---

These are powerful tools, and understanding them will help us envision creative and effective solutions for our hackathon challenges. Let me know if any of these need further clarification!
`;

const techStacksMarkdown = `# CHAI Hackathon: Exploring Robust Tech Stacks for African Contexts

Hi Team,

For our hackathon solutions to be truly impactful in Africa, we need to think carefully about the technologies we use. Many areas have limited internet access, low bandwidth, and people often use basic "feature phones" instead of smartphones. Our tech choices need to work around these realities, not just in ideal conditions.

Here\'s a look at some technology ideas and approaches that can help us build resilient and accessible solutions:

#### 1. Designing for Offline-First

*   **The Idea:** Your application should work even when there\'s no internet. Data can be saved locally on the device and then sent to a central server whenever a connection becomes available (even if it\'s just once a week).
*   **Why it\'s important:** Ensures continuous operation in remote areas.
*   **Key Technologies:**
    *   **Databases for Devices:** \`SQLite\` (for Android/iOS), \`PouchDB\` (for web apps that need offline sync), \`Realm\` (for mobile apps) are great for storing data directly on the phone or tablet.
    *   **Offline Content:** Pre-loading entire curricula, health guides, or financial education modules onto devices or even memory cards.
*   **Example from Case Studies:** The education platform stored lessons locally on solar-powered tablets, and the healthcare app cached patient data offline, syncing it whenever a network was available.

#### 2. Reaching Users with Basic Phones (Feature Phones)

*   **The Idea:** Don\'t just design for smartphones. Many people still rely on basic phones for communication and services.
*   **Why it\'s important:** Maximizes reach and inclusion, ensuring solutions are accessible to the widest possible audience.
*   **Key Technologies:**
    *   **USSD (Unstructured Supplementary Service Data):** This allows for interactive menu-driven services on any phone, without needing internet. Think of checking your mobile money balance – that\'s often USSD.
    *   **SMS (Short Message Service):** Simple text messages can deliver quizzes, alerts, updates, and even allow for basic data input.
    *   **Voice IVR (Interactive Voice Response):** Automated voice calls that can guide users through options or even request voice verification (as seen in the finance case study).
    *   **Open-Source SMS Gateways:** Solutions like \`Kannel\` or integrating with local SMS APIs for sending/receiving messages programmatically.
*   **Example from Case Studies:** The education platform sent interactive SMS quizzes to basic feature phones. The finance solution used SMS and voice calls for identity verification as a fallback for non-smartphone users.

#### 3. Low-Bandwidth and Efficient Data Transfer

*   **The Idea:** Even when there is internet, it might be slow or expensive. Our solutions should be "light" on data usage.
*   **Why it\'s important:** Reduces costs for users and ensures applications perform well even on 2G networks.
*   **Key Technologies:**
    *   **Optimized Data Formats:** Using efficient data formats like \`JSON\` or even highly compressed custom formats.
    *   **Asynchronous Syncing:** Sending data in the background or in small batches, rather than constantly.
    *   **Edge Computing:** Processing data closer to where it\'s collected (on the device or a local server) to reduce the amount of data sent to the cloud.
*   **Example from Case Studies:** The education platform used a solar-powered local server to store data, reducing reliance on constant internet.

#### 4. Cost-Effective and Open-Source Solutions

*   **The Idea:** Leverage free and open-source software wherever possible to reduce development and deployment costs.
*   **Why it\'s important:** Promotes sustainability and local ownership, as the solutions can be freely adapted and maintained without expensive licenses.
*   **Key Technologies:**
    *   **Programming Languages:** \`Python\` (for AI/backend), \`JavaScript\` (for web/mobile), \`Java/Kotlin\` (for Android), \`Swift\` (for iOS).
    *   **Mobile Development Frameworks:** \`React Native\` or \`Flutter\` for building apps that work on both Android and iOS from a single codebase.
    *   **Cloud Platforms (Used Sparingly):** Services like \`Google Cloud Platform\` or \`AWS\` can be used for central AI models and data storage, but only when necessary and designed for cost efficiency. Local servers can be used for most operations.
    *   **Open-Source AI Libraries:** \`TensorFlow Lite\` or \`PyTorch Mobile\` for running AI models directly on devices, reducing cloud reliance.
*   **Example from Case Studies:** The healthcare solution was built by a "scrappy team of hackers" who stood up an emergency AI network, implying a focus on rapid development and resourcefulness.

#### 5. Local Server Infrastructure

*   **The Idea:** Instead of relying solely on distant cloud servers, establish local "mini-servers" within communities or schools.
*   **Why it\'s important:** Provides data sovereignty, faster local access, and reduces dependency on external internet infrastructure.
*   **Key Technologies:**
    *   **Raspberry Pi / Low-Cost Microcomputers:** Small, affordable computers that can host local applications and databases.
    *   **Solar Power Integration:** Essential for powering these local servers in off-grid locations.
*   **Example from Case Studies:** The education initiative provided a solar-powered local server to Umoja Primary, which stored the AI learning app and content.

---

Thinking about these technical considerations will help us shape our solutions to be both innovative and practical for the African context. We want to build things that can actually be used and make a difference on the ground.
`;

const ethicalAiChecklistMarkdown = `# CHAI Hackathon: Ethical AI Checklist for Responsible Development

Hi Team,

As we build AI solutions that aim to improve lives in Africa, it\'s crucial that we develop them responsibly. The whitepapers we\'ve studied all emphasized "Ethical, Regulatory & Inclusive Design Considerations." This checklist distills those important points into practical questions we should ask ourselves throughout the hackathon.

Think of this as our guide to ensure our solutions are not just technically brilliant, but also fair, safe, and truly beneficial for the communities we serve.

#### **The Ethical AI Checklist:**

**1. Data Privacy & Security:**
*   **Question:** Does our solution handle sensitive user data (personal details, health records, financial transactions, children\'s information) with the utmost care?
*   **Checkpoints:**
    *   Is all data encrypted, both when stored and when being sent (in transit)?
    *   Do we only collect data that is absolutely necessary for our solution to work?
    *   Is there clear consent from users (or their guardians) for data collection and usage?
    *   Are personal identifiers anonymized whenever possible for analysis?
    *   Are there robust access controls, ensuring only authorized individuals can view sensitive data?
    *   Does our solution comply with relevant data protection laws (e.g., Kenya\'s Data Protection Act, GDPR if applicable)?

**2. Fairness & Bias Mitigation:**
*   **Question:** Are we actively working to prevent our AI from showing unfair biases towards any group (e.g., based on location, gender, socioeconomic status, language)?
*   **Checkpoints:**
    *   Is our training data diverse and representative of the target user population?
    *   Have we considered if certain groups might be unintentionally disadvantaged by our AI\'s decisions?
    *   Are we regularly auditing our AI models to detect and correct any biases that might emerge?\
    *   Could our solution inadvertently offer worse service or pricing to certain demographics?

**3. Transparency & Explainability:**
*   **Question:** Can we clearly explain how our AI makes decisions, especially when those decisions directly impact users\' lives?
*   **Checkpoints:**
    *   Is the reasoning behind the AI\'s recommendations or actions understandable to users and stakeholders (e.g., "Your premium went down because of X," or "This transaction was flagged because of Y pattern")?
    *   Is there a "human in the loop" for critical or borderline decisions, allowing human oversight and intervention?
    *   Do we have mechanisms to communicate AI decisions and their rationale to users (e.g., through notifications, dashboards)?

**4. Inclusion & Accessibility:**
*   **Question:** Is our solution accessible and usable by everyone, regardless of their device, internet access, literacy level, or disability?
*   **Checkpoints:**
    *   Does our solution function effectively on basic feature phones (e.g., via SMS, USSD, voice)?
    *   Does it work in low-bandwidth or offline environments?
    *   Does it support local languages and culturally relevant examples?
    *   Have we considered accessibility for users with disabilities (e.g., audio output for visually impaired, captions for hearing impaired)?
    *   Is the user interface simple, intuitive, and easy to understand for users with varying levels of digital literacy?

**5. User Consent & Trust:**
*   **Question:** Have we designed our solution to build and maintain user trust, particularly when using advanced features like biometrics?
*   **Checkpoints:**
    *   Are users clearly informed about how their data (including biometric data) will be used and how it benefits them?
    *   Do users have an option to opt-out of certain features or use alternative verification methods (e.g., PIN fallback for biometrics)?
    *   Do we provide clear instructions and support for users who might be intimidated by new technology?
    *   Is our communication with users transparent, especially when transactions are blocked or accounts are put on hold?

**6. Sustainability & Local Ownership:**
*   **Question:** Is our solution designed to be sustainable in the long term, with local communities and institutions capable of maintaining and evolving it?
*   **Checkpoints:**
    *   Does our solution minimize recurring costs and leverage open-source components where possible?
    *   Are we considering how local capacity can be built to manage and adapt the technology?
    *   Is the solution designed to integrate with existing local infrastructures and systems?

---

This checklist is a living document – we should revisit and refine it as our project develops. By consistently asking ourselves these questions, we can ensure our hackathon project is not only innovative but also responsible and truly beneficial for the people of Africa.
`;

const weeklySummaryMarkdown = `# CHAI Hackathon: Weekly Research Summary

Hello Team,

Here's a summary of the key challenges and exciting AI-driven solutions we've explored for the CHAI Hackathon this week. Our goal is to use Artificial Intelligence to create impactful solutions for Africa, and these insights will help us prepare for the problem statements dropping on Friday.

---

## 1. Education: Making Learning Accessible for Everyone

**The Big Problem:** Many children in Africa face huge barriers to getting a good education. This includes a lack of electricity or internet, not enough teachers for huge classes, and lessons often not being in their local language. These issues mean many bright students fall behind, not because they aren't smart, but because they don't have the right tools or support.

**How AI Can Help:** Imagine a world where every child, even in the most remote village, has a personal tutor in their pocket. AI can make this happen by:
*   **Personalized Learning:** AI "tutors" can deliver customized lessons and quizzes through simple text messages on basic phones. If a student is struggling with a topic, the AI gives them more practice until they get it, just like a dedicated teacher would.
*   **Breaking Language Barriers:** AI can translate lessons and even read them out loud in local African languages. This means children can learn in the language they understand best, making school much more engaging and effective.
*   **Learning Anywhere, Anytime:** Solutions can work offline using basic phones or solar-powered tablets. Data can be saved and updated whenever a connection is briefly available, turning any place into a classroom.

**Real-World Example (Case Study):** We saw how an AI learning platform stepped in when a teacher was absent in a rural Kenyan school. It provided personalized math lessons on tablets (shared among students) and even sent interactive quizzes via SMS to basic phones. The students learned effectively, and the AI even gave the returning teacher a detailed report on who needed help and in what areas. This showed how AI can support, not replace, teachers and ensure learning continues.

---

## 2. Insurance: Building Trust and Speeding Up Support

**The Big Problem:** Most people in Africa don't have insurance, whether for their crops, health, or property. This is often because it's hard to sign up, people don't trust that claims will be paid, and the process is slow and complicated. When disasters strike, families and businesses are left vulnerable.

**How AI Can Help:** AI can transform insurance into a reliable and user-friendly service by:
*   **Fairer Prices:** AI can analyze different types of information (like weather patterns for farmers or driving habits for drivers) to offer insurance policies that are truly tailored to an individual's risk. This means fairer prices for everyone.
*   **Faster Claims:** If you have an accident or your crops fail, AI can quickly analyze photos, videos, and reports to assess damage and detect fraud. This means honest claims can be paid out in minutes or hours, not weeks or months.
*   **Better Customer Service:** AI-powered chatbots and personalized messages can answer questions 24/7 in local languages, making insurance much easier to understand and access.

**Real-World Example (Case Study):** We looked at a situation where a massive car accident led to many fake insurance claims, delaying payouts for genuine victims. A hackathon team quickly built an AI system that could spot fraudulent claims by analyzing patterns, checking photos for duplicates, and even reading written reports for suspicious wording. This allowed real claims to be paid quickly, restoring trust and saving the company from significant losses.

---

## 3. Healthcare: Detecting Illnesses Early and Saving Lives

**The Big Problem:** Many African countries struggle with weak and disconnected health information systems. This means important health data often doesn't reach authorities in time, leading to missed warnings about disease outbreaks, poor distribution of medicines, and making it hard for leaders to make crucial health decisions.

**How AI Can Help:** AI can act as a crucial early warning system and improve how health data is used by:
*   **Early Outbreak Detection:** By constantly monitoring health reports (like patient symptoms or clinic visits), AI can spot unusual patterns that suggest a disease outbreak is starting, giving health officials a head start to respond and contain it.
*   **Smarter Data Use:** AI can read through lots of doctor's notes and reports (even in different languages) to find important insights that would take humans ages to discover. It can also help predict where medicines or staff are needed most.

*   **Data Collection Anywhere:** Health workers can use simple mobile apps, even offline, to record patient information. This data then syncs when a connection is available, making sure information from remote areas reaches central databases quickly.

**Real-World Example (Case Study):** We saw how a remote nurse suspected a cholera outbreak but couldn't send her reports due to a broken system. An emergency AI-powered network was quickly built, allowing nurses to send data via offline apps or even SMS. The AI analyzed this data in real-time and alerted health officials to the impending outbreak, enabling them to act quickly and prevent a deadly epidemic from spreading.

---

## 4. Finance & Mobile Money: Protecting Your Money from Scammers

**The Big Problem:** While mobile money has revolutionized finance in Africa, it's also brought a surge in fraud, like SIM swaps (where scammers steal your phone number) and phishing (tricking you into giving away your details). These scams erode trust and can wipe out people's savings in minutes.

**How AI Can Help:** AI and advanced security measures can act as a vigilant guardian for your money by:
*   **Real-Time Fraud Detection:** AI constantly watches transactions and your usual spending habits. If something unusual happens (like a huge transfer late at night from a new device), the AI flags it instantly and can stop it before money is stolen.
*   **Extra Security with Biometrics:** For risky transactions, AI can ask for a voice or fingerprint verification. This makes it much harder for fraudsters to access your account, as they can't mimic your unique biometric features.
*   **Inclusive Protection:** Solutions are designed to work for everyone, whether they have a fancy smartphone or a basic feature phone, using simple SMS or voice calls for verification when needed.

**Real-World Example (Case Study):** We learned about a bank that was hit by SIM swappers who emptied customer accounts. A hackathon team developed an AI system that detected unusual logins and used voice biometrics for high-risk transactions. This system successfully stopped a subsequent fraud attempt, explained its decisions to analysts, and offered protection to all customers, including those with basic phones, restoring confidence in mobile banking.

---

This research gives us a strong foundation for understanding the real-world problems and how AI can provide innovative, ethical, and accessible solutions. Let's keep these insights in mind as we receive the specific problem statements on Friday!
`;

function parseMarkdownForCards(markdown: string): string {
    const lines = markdown.split('\n');
    let html = '';
    let inList = false;
    let inCard = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();

        // Handle main activity title (H1 from markdown)
        if (line.startsWith('# ')) {
            if (inCard) { html += `</div></div>`; inCard = false; }
            if (inList) { html += `</ul>`; inList = false; }
            html += `<h1>${line.substring(2)}</h1>`;
            continue;
        }

        // Handle bolded sub-sections within the weekly summary (e.g., **The Big Problem:**)
        if (line.startsWith('**') && line.endsWith(':**') && markdown === weeklySummaryMarkdown) {
            if (inList) { html += `</ul>`; inList = false; }
            // Ensure previous inner-card is closed if this is a top-level summary sub-heading
            if (inCard) { html += `</div></div>`; inCard = false; }

            // Extract content, remove ** and :** precisely
            const headingText = line.substring(2, line.length - 2).trim(); 
            html += `<h3 class="summary-sub-heading">${headingText}</h3>`;
            continue;
        }

        // Handle sub-section titles (H2 from markdown) which start a new 'inner-card' for the weekly summary
        if (line.startsWith('## ') && markdown === weeklySummaryMarkdown) {
            if (inCard) { html += `</div></div>`; } // Close previous card if open
            if (inList) { html += `</ul>`; inList = false; }
            html += `<div class="inner-activity-card weekly-summary-card"><h2>${line.substring(3)}</h2><div class="inner-card-content">`;
            inCard = true;
            continue;
        }

        // Handle sub-section titles (H4 from markdown) which start a new 'inner-card' for other activities
        if (line.startsWith('#### ') && markdown !== weeklySummaryMarkdown) {
            if (inCard) { html += `</div></div>`; } // Close previous card if open
            if (inList) { html += `</ul>`; inList = false; }
            html += `<div class="inner-activity-card"><h2>${line.substring(5)}</h2><div class="inner-card-content">`;
            inCard = true;
            continue;
        }

        // Handle horizontal rule
        if (line === '---') {
            if (inCard) { html += `</div></div>`; inCard = false; }
            if (inList) { html += `</ul>`; inList = false; }
            html += '<hr>';
            continue;
        }

        // Handle lists
        if (line.startsWith('*') || line.startsWith('-')) {
            if (!inList) { html += `<ul>`; inList = true; }
            // Robust list item parsing: remove leading bullet and then process bold/code
            let listItemContent = line.replace(/^(\s*[-*]+\s*)/, ''); // Remove leading bullet and spaces
            let processedListItem = listItemContent
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
                .replace(/`(.*?)`/g, '<code>$1</code>'); // Inline code
            html += `<li>${processedListItem}</li>`;
            continue;
        }

        // If we were in a list and the current line is not a list item, close the list
        if (inList && !line.startsWith('*') && !line.startsWith('-') && line.trim() !== '') {
            html += `</ul>`;
            inList = false;
        }

        // Handle paragraphs
        // Apply bold and code replacements here, as these are generic for all paragraphs
        if (line.trim() !== '') {
            let paragraph = line
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
                .replace(/`(.*?)`/g, '<code>$1</code>'); // Inline code
            html += `<p>${paragraph}</p>`;
        }
    }

    // Close any open tags at the end of the markdown
    if (inList) { html += `</ul>`; }
    if (inCard) { html += `</div></div>`; }

    // Clean up multiple empty paragraph tags
    html = html.replace(/<p>\s*<\/p>/g, '');

    return html;
}

interface Activity {
    id: string;
    title: string;
    markdownContent: string;
}

const activities: Activity[] = [
    { id: "weekly-summary", title: "Week 3 Research Summary", markdownContent: weeklySummaryMarkdown },
    { id: "ai-techniques", title: "Core AI Techniques Explained", markdownContent: aiTechniquesMarkdown },
    { id: "tech-stacks", title: "Exploring Robust Tech Stacks", markdownContent: techStacksMarkdown },
    { id: "ethical-ai", title: "Ethical AI Checklist", markdownContent: ethicalAiChecklistMarkdown },
];

function renderNavigation(): void {
    const activityNav = document.getElementById('activity-nav');
    if (activityNav) {
        activityNav.innerHTML = activities.map(activity => `
            <li><a href="#" data-activity-id="${activity.id}">${activity.title}</a></li>
        `).join('');

        // Add event listeners to navigation links
        activityNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const activityId = (event.target as HTMLElement).dataset.activityId;
                const selectedActivity = activities.find(act => act.id === activityId);
                if (selectedActivity) {
                    displayActivity(selectedActivity);
                    // Update active class
                    activityNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                    (event.target as HTMLElement).classList.add('active');
                }
            });
        });
    }
}

function displayActivity(activity: Activity): void {
    const activityContent = document.getElementById('activity-content');
    if (activityContent) {
        activityContent.innerHTML = parseMarkdownForCards(activity.markdownContent);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    // Display the first activity by default (which will be the new summary)
    if (activities.length > 0) {
        displayActivity(activities[0]);
        const firstNavLink = document.querySelector(`#activity-nav a[data-activity-id="${activities[0].id}"]`);
        if (firstNavLink) {
            firstNavLink.classList.add('active');
        }
    }
});
