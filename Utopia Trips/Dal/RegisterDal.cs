using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Utopia_Trips.Models;

namespace Utopia_Trips.Dal
{
    public class RegisterDal
    {
        //SqlConnection connection = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\Utopiatrips\Working Version\Utopia Trips\Utopia Trips\App_Data\Utopiatrip.mdf;Integrated Security=True");

        SqlConnection connection = new SqlConnection(@"Data Source=43.255.152.21;Initial Catalog=Karthik_Ddbtest;User ID=Karthik2487;Password=Karthik123");
        internal string CreateUser(RegisterModel model, string code)
        {
            try
            {
                int flag = GetUser(model.EmailId);

                if (flag <= 0)
                {
                    DateTime da = DateTime.Now;
                    string Query = "Insert into Register(EmailId,Fullname,Password,RegisterDate,ActivateCode) VALUES(@EmailId,@Fullname,@Password,@RegisterDate,@ActivateCode)";
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(Query, connection);
                    cmd.Parameters.AddWithValue("@EmailId", model.EmailId);
                    cmd.Parameters.AddWithValue("@Fullname", model.Fullname);
                    cmd.Parameters.AddWithValue("@Password", model.Password);
                    cmd.Parameters.AddWithValue("@RegisterDate",da);
                    cmd.Parameters.AddWithValue("@ActivateCode", code);
                    cmd.ExecuteNonQuery();
                    connection.Close();
                    return "Success";
                }
                else
                {
                    return "Exists";
                }
            }
            catch (Exception ex)
            {
                return "Error!";
            }

        }

        internal void StoreCode(RegisterModel model, string v)
        {
            throw new NotImplementedException();
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