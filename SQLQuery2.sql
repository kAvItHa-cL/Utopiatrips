USE [D:\UTOPIATRIPS\WORKING VERSION\UTOPIA TRIPS\UTOPIA TRIPS\APP_DATA\UTOPIATRIP.MDF]
GO

DECLARE	@return_value Int

EXEC	@return_value = [dbo].[WishlistProcedure]

SELECT	@return_value as 'Return Value'

GO
