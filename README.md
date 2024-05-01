## Project Setup

1. **Clone Repository**: Clone this repository to your local machine.

2. **Database Setup**:
   - Create a MySQL database named `brg_central`.
   - Import `brg_central.sql` file into the database.

3. **Environment Configuration**:
   - Copy contents from `.env.example` and create a new `.env` file.
   - Fill in the database details (`DB_DATABASE`) in the `.env` file.

4. **Generate Application Key**: Run the following command in the project directory to generate a new application key:
   ```bash
   php artisan key:generate
   ```

5. **Install Dependencies**:
   - Run `composer install` to install PHP dependencies (Requires PHP 8.2).
   - Run `npm install --global npm@latest` to install NPM dependencies.

6. **Build Vue Components**: Run `npm run watch/dev` to build Vue components.

7. **Start Websockets Server**: Run `php artisan websockets:serve` to start the websockets server.

8. **Start Local Server**: Run `php artisan serve` to start the local server.

## Setting Up Cron Job

1. **SSH into Your Homestead Environment**: Use PuTTY or Windows Subsystem for Linux (WSL) to SSH into your Homestead environment.

2. **Open the Crontab File**: Run the following command to open the crontab file for editing:
   ```bash
   crontab -e
   ```

3. **Add Cron Job**: Add the following line to the crontab file to run the Laravel scheduler every minute:
   ```bash
   * * * * * cd /path/to/your/laravel/project && php artisan schedule:run >> /dev/null 2>&1
   ```
   Replace `/path/to/your/laravel/project` with the actual path to your Laravel project directory.

4. **Save and Exit**: Save and exit the crontab file.

5. **Verify the Cron Job**: Run the following command to verify that the cron job was added successfully:
   ```bash
   crontab -l
   ```

   You should see your newly added cron job listed.

Use account admin@demo.com and password demo to continue.

---
