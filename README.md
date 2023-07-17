## About wochstack
Wochstack is a Fullstack Development Environment that used to create high performing Web Applications. The starting stack's components are based on, or come directly from, The Epic Stack.

### The Epic Stack
"This is an opinionated project starter and reference that allows teams to ship their ideas to production faster and on a more stable foundation based on the experience of Kent C. Dodds and contributors." -- Kent C. Dodds

- Download/Pull

  https://github.com/epicweb-dev/epic-stack

- Installing the latest epic-stack version:

  ```sh
  npx create-remix@latest --typescript --install --template epicweb-dev/epic-stack
  ```

- Later Deployment

  https://github.com/epicweb-dev/epic-stack/blob/main/docs/deployment.md


### Tech Used In wochstack's Version of The Epic Stack:
- [Remix](https://remix.run/) - Web Framework
- [Fly app deployment](https://fly.io/) with [Docker](https://www.docker.com/)
- Multi-region, distributed, production-ready
  [SQLite Database](https://sqlite.org/) with
  [LiteFS](https://fly.io/docs/litefs/).
- Healthcheck endpoint for
  [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)
- [Grafana](https://grafana.com/) Dashboards of the running app - (metrics of deployed app)
- [GitHub Actions](https://github.com/features/actions) with testing and deploy
  on merge for both production and staging environments
- Email/Password Authentication with
  [cookie-based sessions](https://remix.run/utils/sessions#md-createcookiesessionstorage)
- Two-Factor Authentication (2fa) with support for authenticator apps.
- Transactional email with [Resend](https://resend.com/) and forgot
  password/password reset support.
- Progressively Enhanced and fully type safe forms with
  [Conform](https://conform.guide/)
- Database ORM with [Prisma](https://prisma.io/)
- Role-based User Permissions.
- Custom built image hosting
- Caching via [cachified](https://npm.im/cachified): Both in-memory and
  SQLite-based (with
  [better-sqlite3](https://github.com/WiseLibs/better-sqlite3))
- Styling with [Tailwind](https://tailwindcss.com/)
- An excellent, customizable component library with
  [Radix UI](https://www.radix-ui.com/)
- End-to-end testing with [Playwright](https://playwright.dev/)
- Local third party request mocking with [MSW](https://mswjs.io/)
- Unit testing with [Vitest](https://vitest.dev/) and
  [Testing Library](https://testing-library.com/) with pre-configured Test
  Database
- Code formatting with [Prettier](https://prettier.io/)
- Linting with [ESLint](https://eslint.org/)
- Static Types with [TypeScript](https://typescriptlang.org/)
- Runtime schema validation with [zod](https://zod.dev/)
- Error monitoring with [Sentry](https://sentry.io/welcome/)
- Light/Dark/System mode (without a flash of incorrect theme)

<br/>

## Tips In Development
- --> work with db (updating) --> schema.prisma: adding new models (table) -> we need to issue a migration (npx prisma migrate dev (lose data-continue- yes)+enter migration name)   ((WARNING) : old session is holding the old seed, so we need to clear the cookies/sessions in the browser (untill fixed in epicstack itself))


## !TODO:
- to use objects/arrays from db, - create new model that will store all the texts and they will be related by id to the page/module (same logic as notes being assigned in their own model to each user)...

- redesign User model (table) in db to match our criteria - no way to register, only admin/superadmin user can create other users with only sub-role permissions (superadmin -> only admin and lower..., admin -> only owner and lower, ...)
- start creating texts import (first create uploading file to db and transforming rows/columns into translations, then secondary depending on the output of the json from db of these translations - create shortcodes(aka. global translations variables/constants/functions))

- - !DONE:  create sitemap for admin's functions visualization
- - !DONE: setup the whole environment to be ready to work and develop own customizations to get ready for the actual real development
- - !DONE: dashboard/admin setup - built in function of (requireUserWithPermission/requireAdmin) to get to the /admin page, if not logged in, client(user) will be redirected to the login page
- !DONE: create and ux/ui admin environment
- !DONE:  handle 404 not found page for blind routes - https://remix.run/guides/not-found  (handled my epic-stack in error-boundary.tsx)
  - !DONE: make the error boundary main div container 100% height and style it + add header, etc


### !TODO:: /w Jenda
- !! look into Radix UI + prepare to tell Jenda to look into Radix + Tailwind to know if we can implement these straight into these apps - easier, stronger approach imho
- think about components, that I could start working on (f.e. calendars, bookings, connections to airbnb/booking..   /   other components that can be developed even without ux/ui)

### For Discussion:
- imports/texts/titles,etc. -> figure out the DB table scheme for "shortcuts" and mapping through the pages' texts that should be coming from the clients

<br/>

## About wochstack's Developer

Hello friends, My name is Filip and I am very passionate Fullstack Web Apps Developer.
I like to discover and learn new tech, frameworks & services. Continuous progress and small steps ahead into the future is what makes my job and life so awesome. I love being a developer. I love talking about software, I like to use my knowledge to help others and the fact that my dream job is actually able to bring somebody any value is incredible. 🤗

- 📫 How to reach me? filip@wochdev.com - / or on socials [@wochdev](https://instagram.com/wochdev)
- 👨‍💻 Website: [wochdev.com](https://wochdev.com)

