# admin sitemap

0. BASE:
    Sidebar (left - 20%)
    - (1.) /admin           #DONE
    - (2.) /admin/imports   
    - (3.) /users           #DONE
        - /users/userXYZ    #DONE
    Main content (right - 80%)

1. /admin -> main section on the right (dashboard): inform us about:
    - required scripts status (google, gtm, ga, meta, libraries, etc.)
    - web speed info
    - last import status from each import page (texts, images, etc.)

2. /admin/imports -> Admin section with links to possible imports
    1. /admin/imports/texts
    2. /admin/imports/images

3. /users -> list of users      #DONE
    Display:
    - all users                 #DONE
    - add user                 #preparedTpl - todo next (create simple form & prisma create function...)
    
        Options of admins to change for each user:
        - role
        - delete user

    1. /users/userXYZ - each user's profile (add/remove info & data)       #DONE
        Display:
        - email                                                            #DONE
        - name
        - new password option
        - role (user, owner, admin, superAdmin)

4. /admin/metrics -> speed metrics of all web's pages






LOGIN / SIGNUP scheme

- I want admin to be able to log in safely
- I do not want anybody to be able to signup
- Move forgot password to admin section