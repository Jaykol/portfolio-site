// ============================================================
// Single source of truth for everything except projects
// (projects live in src/content/projects/*.md).
// Edit the values here to update the site copy.
// ============================================================

export const profile = {
  name: 'Jesutofunmi John Ajekola',
  shortName: 'Jesutofunmi',
  title: 'IT Systems Administrator',
  heading: ['infrastructure', '+ security'], // the giant hero statement
  location: 'Lagos, Nigeria',
  email: 'jekola.ajekola@gmail.com',
  phone: '+234 706 397 0030',
  resume: '/resume.pdf',
  available: 'open to DevSecOps & cloud roles',
  links: {
    github: 'https://github.com/Jaykol',
    linkedin: 'https://www.linkedin.com/in/jesutofunmijohn/',
  },
};

export const heroCols = {
  who:
    'IT systems & infrastructure engineer in Lagos. 8+ years keeping networks, endpoints and cloud secure, segmented and available for the people who depend on them.',
  focus:
    'Turning flat networks into defensible, segmented architectures. Now going deeper into **DevSecOps** — security codified into pipelines and infrastructure-as-code, not bolted on after.',
};

export const about = {
  big:
    'I work at the seam between systems administration, networking, cloud and security — the place where most real incidents actually happen.',
  paragraphs: [
    'Over eight years I’ve gone from racking hardware and running a 3,000-node ISP network to administering a 70-person Microsoft 365 and Entra ID environment, segmenting corporate networks, and responding to live cloud incidents. That range is the point: I’ve seen how infrastructure fails at **every layer**, so I build it to fail gracefully and recover fast.',
    'I’m deliberately moving into **DevSecOps** — codifying security into pipelines and infrastructure-as-code so it ships by default. A physics background means I reach for measurement and first principles before guesswork, and I care about honest trade-offs and leaving systems cheaper and safer than I found them.',
  ],
};

export const stack = [
  {
    title: 'Cloud & virtualization',
    items: ['AWS', 'Azure', 'Proxmox VE', 'EC2 / RDS / S3', 'CloudTrail', 'VPC', 'IAM'],
  },
  {
    title: 'DevSecOps & CI/CD',
    items: ['GitHub Actions', 'Terraform', 'Docker', 'Kubernetes', 'Gitleaks', 'Semgrep', 'Snyk', 'Trivy'],
  },
  {
    title: 'Networking & security',
    items: ['Cisco switching', 'VLANs', 'Fortinet', 'VPNs', 'TCP/IP · DNS · DHCP', 'CrowdStrike EDR', 'Incident response'],
  },
  {
    title: 'Microsoft & identity',
    items: ['Microsoft 365', 'Entra ID', 'Active Directory', 'Intune', 'Exchange', 'Google Workspace'],
  },
  {
    title: 'Observability',
    items: ['Prometheus', 'Grafana', 'Alertmanager', 'CloudWatch', 'SLOs'],
  },
  {
    title: 'Scripting & tools',
    items: ['Bash', 'PowerShell', 'Python', 'Git', 'ServiceNow', 'GLPI'],
  },
];

export const experience = [
  {
    when: '05/2023 — Present',
    now: true,
    role: 'IT Support Analyst',
    org: 'Comercio Partners Limited · Lagos',
    points: [
      'Support 70+ staff across Microsoft 365, Windows/macOS, business apps and network connectivity; administer Entra ID and Google Workspace accounts, access and onboarding.',
      'Redesigned a flat network into Cisco VLAN segmentation — isolating users, guests, servers, CCTV and access control behind a Fortinet firewall.',
      'Hardened endpoints with CrowdStrike EDR; host and administer business VMs on Proxmox VE.',
      'Contained a live AWS account compromise and cut monthly AWS spend by 52.4% through rightsizing and cleanup.',
    ],
  },
  {
    when: '02/2023 — 05/2023',
    role: 'Network Operations Center Engineer',
    org: 'Tizeti Network Limited · Lagos',
    points: [
      'Monitored a production network of 3,000+ nodes and responded to outages and performance degradation in real time.',
      'Diagnosed and resolved incidents across DNS, DHCP, routing and end-to-end connectivity; supported field engineers during live escalations.',
    ],
  },
  {
    when: '08/2018 — 01/2023',
    role: 'Technical Support Engineer',
    org: 'Tizeti Network Limited · Lagos',
    points: [
      'Led a rollout team that deployed 3,500+ cloud-managed Wi-Fi hotspots across two states.',
      'Installed and configured routers, structured cabling and wireless infrastructure; documented recurring issues to improve team troubleshooting.',
    ],
  },
];

export const certifications = [
  { name: 'Google Cybersecurity Professional Certificate', sub: 'Proctored · completed', year: '2026' },
  { name: 'Google IT Support Professional Certificate', sub: 'Proctored · completed', year: '2025' },
  { name: 'Juniper JNCIA-Junos', sub: 'Proctored certification', year: '2022' },
  { name: 'AWS Solutions Architect — Associate', sub: 'Course completion', year: '2025' },
];

export const education = [
  { deg: 'M.Sc. Physics (Solid Earth)', school: 'University of Ibadan' },
  { deg: 'B.Sc. Physics', school: 'Federal University of Agriculture, Abeokuta' },
];
