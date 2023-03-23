export default function () {
  return [
    {
      title: 'Create a Contract',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/create-a-contract',
      isLoggedIn: true,
    },
    {
      title: 'Contracts',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/contracts',
      isLoggedIn: true,
    },
    {
      title: 'Login',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/login',
      isLoggedIn: false,
    },
    {
      title: 'Sign Up',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/register',
      isLoggedIn: false,
    },
  ]
}
