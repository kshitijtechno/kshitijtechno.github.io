import React from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TrackPageAnalytics from '../TrackPageAnalytics';

const dataRows = [
  ['Name, email address', 'To create and identify your account, and to send verification codes and password-reset codes.'],
  ['Password', 'To sign you in. Stored hashed (not in plain text) in our database, associated with your account.'],
  ['Shopping list & expense entries you or your family members create', 'Core app functionality — tracking household purchases and spending.'],
  ['Photos you attach to shopping list items', 'Optional — lets a family member show exactly what to buy (e.g. the right brand/packaging). Stored privately and only visible to your own family.'],
  ['Family membership data (who\'s in your household group, invite codes)', 'To let family members share a single household\'s shopping list and expenses.'],
  ['Device notification scheduling', 'To remind you about recurring items (e.g. daily milk) at times you choose. These are local, on-device reminders — no push notification server or third party sees this data.'],
];

const GharKharchaPrivacy = () => {
  return (
    <div>
      <TrackPageAnalytics pagename="GharKharcha Privacy Policy" />
      <Container maxWidth="md" sx={{ pt: 12, pb: 6 }}>
        <Paper elevation={2} sx={{ padding: 4, borderRadius: 4 }}>
          <h1>Privacy Policy — GharKharcha</h1>
          <p style={{ color: '#888', fontSize: 14 }}>Last updated 26 July 2026</p>

          <p>
            GharKharcha ("the app") is a household expense and shopping-list tracker built for
            personal/family use. This policy explains what information the app collects, how
            it's used, and how you can control or delete it.
          </p>

          <h2>Information we collect</h2>
          <TableContainer sx={{ mb: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, backgroundColor: '#EEEDFE' }}>Data</TableCell>
                  <TableCell sx={{ fontWeight: 700, backgroundColor: '#EEEDFE' }}>Why we collect it</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataRows.map(([label, reason]) => (
                  <TableRow key={label}>
                    <TableCell>{label}</TableCell>
                    <TableCell>{reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <p>
            We do not collect location data, contacts, or browsing history. We do not use the
            data we collect for advertising, and we do not sell your data to third parties.
          </p>

          <h2>Third-party services we use</h2>
          <ul>
            <li><strong>Supabase</strong> (database and file storage hosting) — stores your account, family, shopping list, expense data, and any photos you attach, securely and access-controlled to your own family.</li>
            <li><strong>Brevo</strong>, via a backend service we operate on <strong>Render</strong> — sends transactional emails only: sign-up verification codes, password-reset codes, and PDF expense reports you explicitly choose to email. We do not use this for marketing email.</li>
          </ul>

          <h2>Data shared with your family group</h2>
          <p>
            Shopping list items, expenses, comments, and photos you add are visible to other
            members of your household/family group inside the app — that's the app's core
            purpose. Your email and password are never visible to other members.
          </p>

          <h2>Data retention and deletion</h2>
          <p>
            You can delete your account at any time from <strong>Settings → Delete my account</strong>{' '}
            inside the app. Deleting your account removes your name, email, and password from
            our systems. Expense entries you logged remain in your family's shared history (shown
            as "Deleted user") so other household members' shared financial records stay accurate
            — this mirrors how shared-ledger apps generally handle account deletion, since the
            underlying expense records belong to the household, not solely to the individual who
            entered them.
          </p>
          <p>
            Deleting a shopping list item also deletes any photos attached to it. If you'd like
            your historical entries removed as well, contact us using the email below and we'll
            handle it manually.
          </p>

          <h2>Children's privacy</h2>
          <p>
            GharKharcha is intended for household/family financial management by adults and is
            not directed at children under 13. We do not knowingly collect data from children.
          </p>

          <h2>Security</h2>
          <p>
            Data is transmitted over encrypted (HTTPS) connections. As with any app, no method of
            storage or transmission is 100% secure, but we take reasonable steps to protect your
            information.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, we'll update the "last updated" date above. Continued use of
            the app after a change means you accept the revised policy.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy or your data? Email{' '}
            <a href="mailto:codingcrust@gmail.com">codingcrust@gmail.com</a>.
          </p>

          <address style={{ marginTop: 24, display: 'block', fontStyle: 'normal', color: '#666' }}>
            GharKharcha<br />
            Kshitij Wardhan Ahirwar<br />
            codingcrust@gmail.com
          </address>
        </Paper>
      </Container>
    </div>
  );
};

export default GharKharchaPrivacy;
