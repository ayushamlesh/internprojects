using MailKit.Security;
using MimeKit.Text;
using MimeKit;
using WebApi.Models;
using MailKit.Net.Smtp;
using WebApi.server;
using System.Net.Mail;



namespace WebApi.Services
{
    public class EmailService : IEmailService
    {

        public readonly IConfiguration _configuration;
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void SendEmail(EmailDTO request)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_configuration.GetSection("EmailUsername").Value));
            email.To.Add(MailboxAddress.Parse(request.To));
            email.Subject = "Test Email Subject";
            email.Body = new TextPart(TextFormat.Html) { Text = request.Body };
            using var smtp = new MailKit.Net.Smtp.SmtpClient();
            smtp.Connect(_configuration.GetSection("EmailHost").Value, 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(_configuration.GetSection("EmailUsername").Value, _configuration.GetSection("EmailPassword").Value);
            smtp.Send(email);
            smtp.Disconnect(true);
            /*var smtpHost = "smtp.gmail.com";
            var smtpPort = 587;
            var smtpUsername = "your-email@gmail.com";
            var smtpPassword = "your-password";
            var senderEmail = new MailAddress(smtpUsername);
            var recipientEmail = new MailAddress(request.To);
            var message = new MailMessage(senderEmail, recipientEmail)
            {
                Subject = request.Subject,
                Body = request.Body,
                IsBodyHtml = true
            };
            var smtpClient = new System.Net.Mail.SmtpClient(smtpHost, smtpPort)
            {
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(smtpUsername, smtpPassword),
                EnableSsl = true
            };

            smtpClient.Send(message);
            */
        }
    }
}
