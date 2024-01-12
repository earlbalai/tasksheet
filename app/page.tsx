import Image from & apos; next / image & apos

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24 bg-slate-950">
      <section className="text-center leading-7 text-lg">
        <h1 className="text-4xl font-bold mb-4">TaskSheet+</h1>
        <p>Hello and thank you for taking a moment to look at my response to the initial task. I wanted to be a little different and not send a plain ole&apos; file.</p>
        <p>I&apos;m <b>Earl</b> and it is my honor to be able to take part in this task and for the chance to apply for your company!</p>
      </section>
      <section className="flex flex-col gap-4">
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 1:</small>
          <h1 className="font-bold text-xl mb-4">How would you manually migrate a WordPress website? Do note that on your server you
            have full SSH access and the source server is a typical shared CPanel hosting.</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <p>I would use the FTP access included with all CPanel plans. I would archive the directory containing the WordPress website and then use FTP software like FileZilla or Transmit for exmaple, download the archive and move upload/extract it to the new server or location.</p>
        </article>
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 2:</small>
          <h1 className="font-bold text-xl mb-4">Unfortunately, after the migration, it seems that some folders have passed with the
            wrong ownership. Our user:group is www-data:www-data. What actions should be
            taken?</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <p>If I have SSH access on the server I would SSH in and `cd` into the WordPress directory and run the following command `sudo chown -R www-data:www-data .` but if I do not have SSH access then I will use the file management section in CPanel to fix the ownership permissions using the "Change Permission" or "Permission" option in the menu. Though SSH I would highly recommend.</p>
        </article>
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 3:</small>
          <h1 className="font-bold text-xl mb-4">A website seems to be down, server resources are high and the website is most likely
            infected. How would you identify if it’s an infection and possible ways of clearing it up?</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <p>For this, I would check for unauthorized or suspicious code in the website&apos;s files and remove them. I would scan through the code to see if any odd changes were made and remove any code that was inserted. I would also look at logs to see if I can identify how the malicious code or so got in.</p>
        </article>
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 4:</small>
          <h1 className="font-bold text-xl mb-4">What would you suggest if a customer&apos;s site is continuously under a DDOS attack? Make
            an email reply.</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <div>
            <p className="font-bold text-slate-500 mb-2">Subject: Urgent: DDoS Mitigation for Your Website</p>
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded-md">
              <p>Dear X,</p>
              <p>We have identified a DDoS attack on your website and are actively working to mitigate the impact. Our team is implementing protective measures to restore normal website functionality. We appreciate your patience and will keep you updated on the progress.</p>
              <p>Best regards,<br />Earl Balai (Technical Support)</p>
            </div>
          </div>

        </article>
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 5:</small>
          <h1 className="font-bold text-xl mb-4">Briefly explain How would you swap the domain of the main site of the multisite with a
            subsite of the same multisite.</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <p>I would do the following</p>
          <ol>
            <li>1. Backup the database</li>
            <li>2. Update the &quot;siteurl&quot; and &quot;home&quot; values in the wp_options table for both sites.</li>
            <li>3. Update the domain mapping in the site&apos;s settings.</li>
            <li>4. Update the .htaccess file with the new domain.</li>
            <li>5. Update the DNS settings for the domains.</li>
            <li>and update any SSL certificates with the new domain. Granted this process can vary depending on server setup.</li>
          </ol>
        </article>
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 6:</small>
          <h1 className="font-bold text-xl mb-4">The obvious answer between HTTP and HTTPS is HTTPS. But what would be needed in
            terms of files and data to install a certificate on a server?</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <p>This can be done in a couple ways. Either an SSL certificate is purchased or the more common way (For me at least) would be to use LetsEncrypt free certificates which need a renewal every 3 months. I would then install the certificate on the server and update the nginx configuration to use the certificate. I would also need to ensure port 443 is open. This is something I do often with my Ruby on Rails sites using Nginx and I have a cronjob that handles auto renewal.</p>
        </article>
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 7:</small>
          <h1 className="font-bold text-xl mb-4">A website returns an error of <b>PHP Fatal error: Allowed memory size of 268435456
            bytes exhausted (tried to allocate 139264 bytes) in
            /var/web/site/public_html/wp-includes/functions.php on line 4552</b> . What would this
            error mean and how could it be resolved?</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <p>It typically means that the allowed memory is at capacity. One way to fix it would be to increase the limit in the php.ini or using .htaccess ex: `php_value memory_limit 256M`</p>
        </article>
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 8:</small>
          <h1 className="font-bold text-xl mb-4">A website has some old pages - /<b>contact-us-now</b>/, /<b>about-me</b>/, /<b>portfolio.html</b>. Write
            the Nginx rules to redirect them to the homepage.</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <p>This can be done with one rule that uses regular expression:</p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <code className="text-green-400">location ~ ^/(contact-us-now|about-me|portfolio.html) &#123;</code><br />
            <code className="text-blue-400 pl-4">return 301 /;&#125;</code><br />
            <code className="text-green-400">&#125;</code>
          </div>
        </article>
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 9:</small>
          <h1 className="font-bold text-xl mb-4">A customer requests that some of his folders & files require 777 permissions. How would
            you handle this? Make a reply to the user</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <p>I would inform them that is is a security risk to make files/folders full permission and I would try to get more details to help offer a different approach if possible. However, if absolutely needed then I would update the permissions for them from the File Manager or in terminal with the `chmod` command</p>
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded-md mt-2">
            <p>Dear [Customer&apos;s Name],</p>
            <p>Granting 777 permissions is a security risk and not recommended. However, we can assist you in finding a secure alternative to meet your needs. Please provide more details about the specific requirements so that we can offer the most suitable solution.</p>
            <p>Best regards,<br />Earl Balai (Technical Support)</p>
          </div>
        </article>
        <article className="border border-slate-800 rounded p-4 w-full">
          <small className="text-red-600 font-bold uppercase">Question 10:</small>
          <h1 className="font-bold text-xl mb-4">How would you troubleshoot a site throwing a 503 error on the front end?</h1>
          <small className="text-blue-600 font-bold uppercase">Answer:</small>
          <p>I would do one of the following,</p>
          <ol>
            <li>1. Check server logs for error details.</li>
            <li>2. Temporarily disable plugins and switch to a default theme.</li>
            <li>3. Check for recent changes in configurations or code.</li>
            <li>(If all else fails) 4. Contact the hosting provider support for further assistance.</li>
          </ol>
        </article>
      </section>
    </main>
  )
}
