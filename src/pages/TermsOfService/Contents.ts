
export interface Content {
    title: string;
    description: string[];
    email?: string;
}

export const Contents: Content[] = [
    {
        title: "Introduction & Agreement",
        description: [
            `SIT provides technology and digital services to businesses, organizations, teams, and individuals. Depending on the project, our work may include web development, software development, UI/UX design, system integration, automation, IT consulting, technical support, maintenance, and related digital services.`,
            `These Terms form an agreement between you and SIT when you purchase, engage, or use our services.`,
            `A specific project may also have a proposal, statement of work, service agreement, quotation, or other written agreement. If a project-specific agreement contains terms that conflict with these Terms, the project-specific agreement will generally apply to that project.`
        ]
    },
    {
        title: "About Our Services",
        description: [
            `We provide technology services based on the needs and agreed scope of each client.`,
            `Our services may include:`,
            `1. Web / Mobile application development`,
            `2. Custom software development`,
            `3. Technology strategy and planning`,
            `4. UI/UX design`,
            `5. System integration`,
            `6. Business process automation`,
            `7. API development and integration`,
            `8. Technical consulting`,
            `9. IT support and maintenance`,
            `10. Digital product development`,
            `Not every project requires the same solution. We may recommend an existing tool, third-party platform, configuration change, or simpler approach when we believe it is more appropriate than building something from scratch.`,
            `The exact services, deliverables, timelines, technologies, and responsibilities for a project will be defined in the applicable proposal or agreement.`
        ]
    },
    {
        title: "Using Our Services",
        description: [
            "You agree to use SIT services responsibly and only for lawful purposes.",
            "You must not use our services to:",
            `1. Violate applicable laws or regulations`,
            `2. Commit fraud or facilitate illegal activity`,
            `3. Gain unauthorized access to systems, accounts, or data`,
            `4. Distribute malicious software`,
            `5. Attempt to disrupt or damage systems`,
            `6. Infringe another person's intellectual property or privacy rights`,
            `7. Abuse, harass, or harm other users`,
            `8. Misrepresent your identity or authority`,
            `9. Use our services in a way that creates unreasonable security or operational risks`,
            `We reserve the right to suspend or refuse service when we reasonably believe an engagement creates significant legal, security, ethical, or operational concerns.`
        ]
    },
    {
        title: "Accounts & Client Responsibilities",
        description: [
            `Some services may require you to provide account information, credentials, access permissions, technical documentation, or other information necessary for us to complete the work.`,
            `You are responsible for providing information that is accurate, complete, and reasonably current.`,
            `You are also responsible for:`,
            `1. Maintaining the security of your accounts`,
            `2. Protecting credentials and access tokens`,
            `3. Giving access only to authorized individuals`,
            `4. Providing accurate project requirements`,
            `5. Providing necessary content, assets, and documentation`,
            `6. Reviewing deliverables within agreed timelines`,
            `7. Informing us about changes that may affect the project`,
            `8. Promptly reporting suspected security incidents`,
            `If you provide us with access to a third-party service, you confirm that you have the authority to provide that access.`,
            `We are not responsible for delays caused by missing information, unavailable credentials, delayed approvals, or third-party systems outside our reasonable control.`
        ]
    },
    {
        title: "Projects, Deliverables & Approvals",
        description: [
            "Projects are generally performed according to an agreed scope.",
            "Depending on the engagement, the process may include discovery, planning, design, development, testing, deployment, and post-launch support.",
            "You agree to:",
            `1. Review proposed designs and deliverables`,
            `2. Provide feedback within agreed timeframes`,
            `3. Provide required content and materials`,
            `4. Identify errors or requested changes clearly`,
            `5. Approve completed milestones when appropriate`,
            `A project timeline may change when requirements, approvals, content, integrations, or dependencies change.`,
            `Deliverables are considered accepted when you provide written approval or when the applicable agreement defines another acceptance process.`
        ]
    },
    {
        title: "Fees, Payments & Billing",
        description: [
            `Project fees, payment schedules, recurring charges, and other costs will be described in the applicable proposal, quotation, invoice, or agreement.`,
            `Unless otherwise agreed, payments may be required before work begins or at defined project milestones.`,
            `Additional work outside the agreed scope may require a separate quotation or change request.`,
            `Examples of scope changes include:`,
            `1. New features & integrations`,
            `2. Additional pages or screens`,
            `3. Significant design revisions`,
            `4. New platforms or environments`,
            `5. Changes to previously approved functionality`,
            `6. Additional data migration or testing requirements`,
            `Late payments may affect project schedules and may result in temporary suspension of services.`,
            `Third-party costs—such as hosting, domain registration, software subscriptions, APIs, licenses, or other external services—may be billed separately unless explicitly included in the project agreement.`
        ]
    },
    {
        title: "Intellectual Property",
        description: [
            `Unless otherwise stated in a written agreement, each party retains ownership of intellectual property it owned before the project began.`,
            `This may include:`,
            `1. Existing software`,
            `2. Frameworks`,
            `3. Libraries`,
            `4. Templates`,
            `5. Internal tools`,
            `6. Processes`,
            `7. Brand assets`,
            `8. Documentation`,
            `9. Pre-existing designs`,
            `For custom deliverables created specifically for a client, ownership or usage rights will follow the terms stated in the applicable project agreement.`,
            `Third-party libraries, frameworks, APIs, fonts, stock assets, and other components remain subject to their respective licenses.`,
            `SIT may retain ownership of reusable development techniques, internal tools, generic components, know-how, and non-client-specific methods used during a project unless otherwise agreed.`
        ]
    },
    {
        title: "Third-Party Services & Integrations",
        description: [
            "Some projects depend on third-party platforms and services.",
            `These may include hosting providers, cloud platforms, payment processors, analytics services, communication tools, APIs, authentication providers, and other external systems.`,
            `We will make reasonable efforts to integrate supported third-party services correctly, but we cannot guarantee the availability, pricing, security, functionality, or continued operation of services controlled by third parties.`,
            `Changes made by a third-party provider may require additional development work.`,
            `Third-party subscriptions and fees are generally the client's responsibility unless otherwise stated in writing.`
        ]
    },
    {
        title: "Data & Privacy",
        description: [
            "We respect the privacy and security of information entrusted to us.",
            `We only collect, access, use, or process information as reasonably necessary to provide our services, communicate with you, maintain our systems, or fulfill applicable legal and contractual obligations.`,
            `You are responsible for ensuring that information you provide to SIT may legally be shared with us for the purpose of the engagement.`,
            `Our Privacy Policy provides additional information about how personal information may be handled.`,
            `You should not provide sensitive information unless it is necessary for the service and appropriate safeguards have been discussed.`
        ]
    },
    {
        title: "Changes, Revisions & Project Scope",
        description: [
            "Projects naturally evolve, but significant changes can affect cost, schedule, and technical requirements.",
            `We will try to identify material scope changes before performing additional work.`,
            `Minor revisions that are reasonably within the agreed scope may be included. Requests that substantially change the original direction may be treated as additional work.`,
            `Examples include changing an approved design into a substantially different concept, adding major functionality, introducing new integrations, or changing the technical requirements after development has begun.`,
            `When possible, we will communicate the impact of these changes before proceeding.`
        ]
    },
    {
        title: "Warranties & Service Limitations",
        description: [
            "We aim to provide reliable, professional, and carefully developed services.",
            `However, technology depends on many factors outside our direct control. We cannot guarantee that every service will always be completely uninterrupted, error-free, or compatible with every future environment.`,
            `Unless specifically stated in a written agreement, we do not guarantee:`,
            `1. Continuous availability`,
            `2. Compatibility with every third-party service`,
            `3. Performance under unknown or substantially changed conditions`,
            `4. Uninterrupted operation of external platforms`,
            `5. Protection against every possible security threat`,
            `6. That a particular business outcome will be achieved`,
            `We will make reasonable efforts to investigate and address issues that are within the agreed scope of our services.`
        ]
    },
    {
        title: "Limitation of Liability",
        description: [
            "To the extent permitted by applicable law, SITGO will not be responsible for indirect, incidental, special, consequential, or unforeseeable losses arising from the use of our services.",
            "This may include loss of revenue, business interruption, loss of anticipated savings, loss of opportunities, or loss caused by third-party systems.",
            "Our liability for a specific service will generally be limited to the amount paid for that service, unless a different limitation is established in a written agreement or applicable law requires otherwise.",
            "Nothing in these Terms is intended to exclude liability that cannot legally be excluded."
        ]
    },
    {
        title: "Confidentiality",
        description: [
            "We understand that technology projects may involve confidential business information.",
            "Each party agrees to use reasonable care when handling confidential information received from the other party and not to disclose it to unauthorized parties except when required by law or necessary to provide the agreed services.",
            `Confidential information may include business plans, technical documentation, credentials, customer information, source code, product concepts, financial information, and other information that is reasonably understood to be confidential.`,
            `This obligation does not generally apply to information that is already publicly available, independently developed, lawfully received from another source, or required to be disclosed by law.`
        ]
    },
    {
        title: "Termination",
        description: [
            "Either party may terminate a project or service according to the applicable project agreement.",
            "If an engagement is terminated:",
            "1. Work completed up to the termination date may remain payable",
            `2. Approved or completed milestones may remain payable`,
            `3. Outstanding third-party expenses may remain payable`,
            `4. Access to certain services may be restricted after termination`,
            `5. Client-owned materials will be handled according to the applicable agreement`,
            `We may suspend or terminate services if there is serious misuse, non-payment, unlawful activity, security risk, or material breach of these Terms.`,
            `Termination does not automatically remove obligations that were intended to survive termination, including confidentiality, intellectual property, payment obligations, and applicable limitations of liability.`
        ]
    },
    {
        title: "Dispute Resolution",
        description: [
            `We prefer to resolve disagreements through direct and good-faith communication.`,
            `If an issue arises, we encourage both parties to first discuss the matter and attempt to reach a practical resolution.`,
            `If the issue cannot be resolved informally, the parties may pursue the remedies available under the applicable agreement and laws of the Philippines.`,
            `Nothing in these Terms prevents either party from exercising rights that cannot legally be waived.`
        ]
    },
    {
        title: "Changes to These Terms",
        description: [
            `Technology changes. Businesses change. Our Terms may change too.`,
            `We may update these Terms from time to time to reflect changes in our services, business practices, legal requirements, or technology.`,
            `When we make significant changes, we may update the “Last Updated” date on this page and provide additional notice when appropriate.`,
            `Your continued use of our services after an updated version becomes effective means that you acknowledge the updated Terms, to the extent permitted by law.`
        ]
    },
    {
        title: "Contact Us",
        description: [
            `If you have questions about these Terms, your project, billing, responsibilities, or anything that does not make sense, please reach out.`,
            `We would rather explain something clearly than leave you guessing.`,
            `***SIT***`,
            `Website: http://www.getsitgo.com`,
            `Clear terms. Better partnerships.`,
            `Technology works better when people understand what they are building together.`,
            `**Let's start something.**`,
            `*Important: This is website copy and should be reviewed and adapted by a qualified Philippine lawyer before being published as SIT legally binding Terms of Service.*`

        ],
        email: `${import.meta.env.VITE_CONTACT_EMAIL}`
    }
];