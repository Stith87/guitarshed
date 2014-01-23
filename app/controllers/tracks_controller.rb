class TracksController < ApplicationController

	def tracks
		
		@query = params[:t] 

		if(params.has_key?(:t))
	 		@tracks = Track.find_by_sql("Select * from tracks where artist like '%#{@query}%' ORDER BY artist, title")
		end

	end

	def show
		@query = params[:t]
		@tracks = Track.find_by_sql("Select * from tracks where artist like '#{@query}' ORDER BY title")


	end

end
