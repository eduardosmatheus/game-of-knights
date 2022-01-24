require './game_knights/game_knights'

class Main
  attr_accessor :knights

  def initialize
    @knights = GameOfKnights::Knights.new
  end

  def run
    while @knights.game_on?
      @knights.database.each_with_index do |knight, idx|
        @knights.fight(knight, @knights.healthy_knight(idx)) if @knights.healthy?(knight)
      end
    end
    puts "Game finished. #{@knights.winner.name} wins!"
  end
end

Main.new.run
