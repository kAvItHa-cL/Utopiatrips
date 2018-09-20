using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Web;
using Utopia_Trips.Models;

namespace Utopia_Trips.Dal
{
    public class PasswordDal
    {

        SqlConnection connection = new SqlConnection(@"Data Source=43.255.152.21;Initial Catalog=Karthik_Ddbtest;User ID=Karthik2487;Password=Karthik123");

        internal void SendPassword(ForgotPasswordModel model)
        {
            using (MailMessage mailMessage = new MailMessage())
            {
                Guid id = Guid.NewGuid();
                string url = "http://utopiatrips.com/Activate/ResetPassword?user=" + model.Username + "&code=" + id.ToString();

                string body = "Hello Wanderer!";
                using (System.IO.StreamReader Reader = new System.IO.StreamReader(HttpContext.Current.Server.MapPath("~/Mail/Forgot.html")))
                {
                    body = Reader.ReadToEnd();
                }
                body = Regex.Replace(body, "Replacewithurl", url);
                mailMessage.From = new MailAddress("support@utopiatrips.com");

                mailMessage.Subject = "Utopiatrips - Reset Password!";

                mailMessage.Body = body;

                mailMessage.IsBodyHtml = true;

                mailMessage.To.Add(new MailAddress(model.Username));
                var SmtpClient = new SmtpClient();

                SmtpClient.Send(mailMessage);
            }
        }

        internal int UpdatePassword(ResetPasswordModel model, string user)
        {
            int flag = GetUser(user);

            if (flag <= 0)
            {
                DateTime da = DateTime.Now;
                string Query = "Update Register(Password) VALUES(@Password) WHERE EmailId='" + user;
                connection.Open();
                SqlCommand cmd = new SqlCommand(Query, connection);
                cmd.Parameters.AddWithValue("@Password", model.Password);
                cmd.ExecuteNonQuery();
                connection.Close();
                return 1;
            }
            else
            {
                return 0;
            }
        }


        private int GetUser(string emailId)
        {
            string Query = "Select Count(*) from Register where EmailId=@EmailId";
            connection.Open();
            SqlCommand cmd = new SqlCommand(Query, connection);
            cmd.Parameters.AddWithValue("EmailId", emailId);
            int flag = (int)cmd.ExecuteScalar();
            connection.Close();

            return flag;
        }

    }
}