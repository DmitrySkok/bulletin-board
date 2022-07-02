export const initialState = {
  posts: {
    data: [
      /* {
        id: '1',
        title: 'Rent an apartment',
        author: 'Thomas Scott',
        publicationDate: 'Jun 17, 2022, 10:00 AM',
        actualizationDate: 'Jun 17, 2022, 10:00 AM',
        status: 'Closed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut consectetur felis. Maecenas feugiat nisl vitae sem venenatis iaculis. Aenean quis enim maximus, elementum libero vel, posuere massa. Praesent ut ligula eu nisl condimentum pulvinar volutpat vitae tortor. Praesent hendrerit, massa vel suscipit mattis, quam nisl ultrices nisi, quis porttitor elit dolor interdum nisl.',
      },
      {
        id: '2',
        title: 'Apartment for sale',
        author: 'John Doe',
        publicationDate: 'Sep 18, 2021, 11:00 AM',
        actualizationDate: 'Sep 18, 2021, 11:00 AM',
        status: 'Published',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut consectetur felis. Maecenas feugiat nisl vitae sem venenatis iaculis. Aenean quis enim maximus, elementum libero vel, posuere massa. Praesent ut ligula eu nisl condimentum pulvinar volutpat vitae tortor. Praesent hendrerit, massa vel suscipit mattis, quam nisl ultrices nisi, quis porttitor elit dolor interdum nisl.',
      },
      {
        id: '3',
        title: 'Selling a house',
        author: 'Will Donald',
        publicationDate: 'Nov 18, 2020, 12:00 AM',
        actualizationDate: 'Nov 18, 2020, 12:00 AM',
        status: 'Published',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut consectetur felis. Maecenas feugiat nisl vitae sem venenatis iaculis. Aenean quis enim maximus, elementum libero vel, posuere massa. Praesent ut ligula eu nisl condimentum pulvinar volutpat vitae tortor. Praesent hendrerit, massa vel suscipit mattis, quam nisl ultrices nisi, quis porttitor elit dolor interdum nisl.',
      }, */
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    name: 'Not logged',
    logged: false,
    position: 'User',
  },
  users: [
    {
      name: 'Admin',
      logged: true,
      position: 'Admin',
    },
    {
      name: 'Test user',
      logged: true,
      position: 'User',
    },
    {
      name: 'Not logged',
      logged: false,
      position: 'User',
    },
  ],
};
