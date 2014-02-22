class TracksController < ApplicationController

	def tracks
		
		if(params.has_key?(:t))
			@query =  ActiveRecord::Base.connection.quote("%" + params[:t] + "%" )
			@ttype =  params[:ttype]
	 		@tracks = Track.find_by_sql("Select * from tracks where #{@ttype} like #{@query} ORDER BY artist, title")
		end

	end

	def show
		@query = params[:t]
		@tracks = Track.find_by_sql("Select * from tracks where title like '#{@query}' ORDER BY title")


	end

end
