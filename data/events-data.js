/* ================================================================
 * ICAR-IVRI VETERINARY PATHOLOGY — DEPARTMENT EVENTS DATA
 * ================================================================
 * THIS IS THE ONLY EVENTS FILE THAT DEPARTMENT STAFF SHOULD EDIT.
 *
 * Quick rules:
 * 1. Copy the commented event template below into the events list.
 * 2. Set sectionEnabled to false to hide the complete events section.
 * 3. Keep published: false while preparing an event.
 * 4. Change published to true only when it is ready for public view.
 * 5. Use full https:// links. Leave a link as "" when not available.
 * 6. Keep the comma between event blocks.
 *
 * A mistake in this file cannot stop the syllabus, quizzes, or lessons.
 * ================================================================ */

window.IVRI_PATHOLOGY_EVENTS_CONFIG = {
    // STAFF TOGGLE: true = show the section; false = hide it completely.
    sectionEnabled: true,
    sectionTitle: 'IVRI Pathology Announcements & Seminars',
    sectionSubtitle: 'Upcoming academic programmes, expert lectures, diagnostic slide workshops, and official updates.',
    emptyMessage: 'No upcoming events right now.',

    // Official IVRI YouTube / Video channel link:
    youtubeChannelUrl: '',
    youtubeChannelLabel: 'Visit IVRI YouTube Channel',

    // Add event blocks here when a programme is announced. Template:
    // {
    //     id: 'necropsy-workshop-2026',
    //     published: false,
    //     title: 'National Workshop on Avian & Ruminant Necropsy Techniques',
    //     category: 'Hands-on Workshop',
    //     date: '2026-10-10T10:00:00+05:30',
    //     endDate: '2026-10-11T17:00:00+05:30',
    //     speaker: 'Division of Pathology, ICAR-IVRI Bareilly',
    //     description: 'Comprehensive post-mortem lesion recognition and sampling protocols for UG and PG students.',
    //     youtubeUrl: '',
    //     registrationUrl: '',
    //     featured: true,
    //     showPopup: true
    // }
    events: []
};
