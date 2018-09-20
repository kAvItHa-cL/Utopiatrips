using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Web;
using Utopia_Trips.Models;

namespace Utopia_Trips.Dal
{
    public class MailModule
    {
        internal void SendLeadsMail(PaymentModel model)
        {
            var SmtpClient = new SmtpClient();
            string body = "Name = " + model.FirstName + "\n LastName=  " + model.LastName + "\n Email =  " + model.Email + "\n Phone = " + model.Phone + " \n Description = " + model.Description + "\n Amount =  " + model.Amount + "\n Currency =  " + model.Currency + "\n TripDate = " + model.TripDate + " \n Tickets = " + model.Tickets + "\n Total =  " + model.Total + "\n TrekType =  " + model.TrekType + "\n GiftCode = " + model.GiftCode;
            SmtpClient.Send("support@utopiatrips.com", "Enquiry@utopiatrips.com", "Leads Email", body);
        }

        internal void SendMail(FindUsModel model)
        {
            var SmtpClient = new SmtpClient();
            string body = "Name = " + model.FirstName + "\n Phone =  " + model.Phone + "\n Message =  " + model.Message + "\n Date = " + DateTime.Now;
            SmtpClient.Send("support@utopiatrips.com", "Enquiry@utopiatrips.com", "Contact Form", body);
        }

        internal void SendRegisterMail(RegisterModel model)
        {
            var SmtpClient = new SmtpClient();
            string body = "Email = " + model.EmailId + "\n Password =  " + model.Password + "\n FullName =  " + model.Fullname + "\n Register Date = " + DateTime.Now;
            SmtpClient.Send("support@utopiatrips.com", "Enquiry@utopiatrips.com", "Register Form", body);
        }

        internal void CorporateSendMail(CorporateModel model)
        {
            var SmtpClient = new SmtpClient();
            string body = "Name = " + model.FirstName + "\n Phone =  " + model.Phone + "\n Message =  " + model.Message + "\n Team Size = " + model.GroupSize + "\n Date = " + DateTime.Now;
            SmtpClient.Send("support@utopiatrips.com", "Enquiry@utopiatrips.com", "Corporate Form", body);
        }

        internal void SendActivationCode(RegisterModel model,string code)
        {

            string url = "http://utopiatrips.com/Activate/Verification?user="+model.EmailId+"&code=" + code;

            using (MailMessage mailMessage = new MailMessage())
            {
                string body = "Hello = " + model.Fullname;
                using (System.IO.StreamReader Reader = new System.IO.StreamReader(HttpContext.Current.Server.MapPath("~/Mail/Activate.html")))
                {
                    body = Reader.ReadToEnd();
                }
                body= Regex.Replace(body, "Replacewithurl", url);
                mailMessage.From = new MailAddress("support@utopiatrips.com");

                mailMessage.Subject = "Confirm Your Account!";

                mailMessage.Body = body;

                mailMessage.IsBodyHtml = true;

                mailMessage.To.Add(new MailAddress(model.EmailId));
                var SmtpClient = new SmtpClient();

                SmtpClient.Send(mailMessage);
            }
        }

        internal void WelcomeSendMail(string user)
        {
            using (MailMessage mailMessage = new MailMessage())

            {
                string body = "Hello Wanderer!";
                using (System.IO.StreamReader Reader = new System.IO.StreamReader(HttpContext.Current.Server.MapPath("~/welcome.html")))
                {
                    body = Reader.ReadToEnd();
                }
                mailMessage.From = new MailAddress("support@utopiatrips.com");

                mailMessage.Subject = "Thanks for joining wanderers community!";

                mailMessage.Body = body;

                mailMessage.IsBodyHtml = true;

                mailMessage.To.Add(new MailAddress(user));
                var SmtpClient = new SmtpClient();
                
                SmtpClient.Send(mailMessage);
            }
        }
    }
}