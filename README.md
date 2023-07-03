Hello friends, My name is Filip and I am very passionate Fullstack Web Apps Developer.
I like to discover and learn new tech, frameworks & services. Continuous progress and small steps ahead into the future is what makes my job and life so awesome. I love being a developer. I love talking about software, I like to use my knowledge to help others and the fact that my dream job is actually able to bring somebody any value is incredible. 🤗

- - 📫 How to reach me? filip@wochlife.com - / or on socials [@wochlife](https://instagram.com/wochlife)
- - 👨‍💻 Website: [wochlife.com](https://wochlife.com) -







### woch-stack
- [Remix](https://remix.run/) is the Web Framework of choice
- Multi-region, distributed, production-ready
  [SQLite Database](https://sqlite.org/) with
  [LiteFS](https://fly.io/docs/litefs/).
- [Grafana](https://grafana.com/) Dashboards of the running app
- [GitHub Actions](https://github.com/features/actions) with testing and deploy
  on merge for both production and staging environments
- Email/Password Authentication with
  [cookie-based sessions](https://remix.run/utils/sessions#md-createcookiesessionstorage)
- Two-Factor Authentication (2fa) with support for authenticator apps.
- Progressively Enhanced and fully type safe forms with
  [Conform](https://conform.guide/)
- Database ORM with [Prisma](https://prisma.io/)
- Role-based User Permissions.
- Caching via [cachified](https://npm.im/cachified): Both in-memory and
  SQLite-based (with
  [better-sqlite3](https://github.com/WiseLibs/better-sqlite3))
- Styling with [Tailwind](https://tailwindcss.com/)
- Code formatting with [Prettier](https://prettier.io/)
- Static Types with [TypeScript](https://typescriptlang.org/)
- Error monitoring with [Sentry](https://sentry.io/welcome/)




--> dashboard/admin setup - built in function of (requireUserId/requireUserWithPermission) to get to the /admin page, if not logged in, client(user) will be redirected to the login page 

--> work with db (updating) --> schema.prisma: adding new models (table) -> we need to issue a migration (npx prisma migrate dev (lose data-continue- yes)+enter migration name)   ((WARNING) : old session is holding the old seed, so we need to clear the cookies/sessions in the browser (untill fixed in epicstack itself))



# !TODO: 

- 

### for discussion:
- imports/texts/titles,etc. -> figure out the DB table scheme for "shortcuts" and mapping through the pages' texts that should be coming from the clients




### Future Possibilities (Possible Implementations (recommandations from epic-stack))
- [Fly app deployment](https://fly.io/) with [Docker](https://www.docker.com/)
- Healthcheck endpoint for
  [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)
- Transactional email with [Resend](https://resend.com/) and forgot
  password/password reset support.
- Custom built image hosting
- An excellent, customizable component library with
  [Radix UI](https://www.radix-ui.com/)
- End-to-end testing with [Playwright](https://playwright.dev/)
- Local third party request mocking with [MSW](https://mswjs.io/)
- Unit testing with [Vitest](https://vitest.dev/) and
  [Testing Library](https://testing-library.com/) with pre-configured Test
  Database
- Linting with [ESLint](https://eslint.org/)
- Runtime schema validation with [zod](https://zod.dev/)
- Light/Dark/System mode (without a flash of incorrect theme)




---

## wochdev's stack

# download/pull
- install the epic stack dir to the current dir
    - " npx create-remix@latest --typescript --install --template epicweb-dev/epic-stack "

# later deployment
- https://github.com/epicweb-dev/epic-stack/blob/main/docs/deployment.md

# using:
- localhost for development
- github as a version control
- github actions for testing
- fly.io as a 'real-use-case' development server

