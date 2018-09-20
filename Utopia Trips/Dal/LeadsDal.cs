using System;
using System.Data.SqlClient;
using System.Net.Mail;
using Utopia_Trips.Models;

namespace Utopia_Trips.Dal
{
    public class LeadsDal
    {
        SqlConnection connection = new SqlConnection(@"Data Source=43.255.152.21;Initial Catalog=Karthik_Ddbtest;User ID=Karthik2487;Password=Karthik123");
        internal void StoreBooking(PaymentModel model)
        {
            try
            {
                string Query = "Insert into Leads(FirstName,LastName,Email,Phone,Description,Amount,Currency,TripDate,Tickets,Total,TrekType,GiftCode) VALUES(@FirstName,@LastName,@Email,@Phone,@Description,@Amount,@Currency,@TripDate,@Tickets,@Total,@TrekType,@GiftCode)";
                connection.Open();
                SqlCommand cmd = new SqlCommand(Query, connection);
                cmd.Parameters.AddWithValue("@FirstName", model.FirstName);
                cmd.Parameters.AddWithValue("@LastName", model.LastName);
                cmd.Parameters.AddWithValue("@Email", model.Email);
                cmd.Parameters.AddWithValue("@Phone", model.Phone);
                cmd.Parameters.AddWithValue("@Description", model.Description);
                cmd.Parameters.AddWithValue("@Amount", model.Amount);
                cmd.Parameters.AddWithValue("@Currency", model.Currency);
                cmd.Parameters.AddWithValue("@TripDate", model.TripDate);
                cmd.Parameters.AddWithValue("@Tickets", model.Tickets);
                cmd.Parameters.AddWithValue("@Total", model.Total);
                cmd.Parameters.AddWithValue("@TrekType", model.TrekType);
                cmd.Parameters.AddWithValue("@GiftCode", model.GiftCode);

                cmd.ExecuteNonQuery();
                connection.Close();
            }
            catch (Exception ex)
            {
            }
        }
    }
}