using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Utopia_Trips.Models;

namespace Utopia_Trips.Dal
{
    public class LoginDal
    {
        //SqlConnection connection = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\Utopiatrips\Working Version\Utopia Trips\Utopia Trips\App_Data\Utopiatrip.mdf;Integrated Security=True");


        SqlConnection connection = new SqlConnection(@"Data Source=43.255.152.21;Initial Catalog=Karthik_Ddbtest;User ID=Karthik2487;Password=Karthik123");


        internal int CheckLogin(LoginModel model)
        {
            string Query = "Select Count(*) from Register where EmailId=@EmailId And Password=@Password";
            connection.Open();
            SqlCommand cmd = new SqlCommand(Query, connection);
            cmd.Parameters.AddWithValue("EmailId", model.Username);
            cmd.Parameters.AddWithValue("Password", model.Password);

            int flag = (int)cmd.ExecuteScalar();
            connection.Close();

            return flag;
        }
    }
}