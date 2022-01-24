require './game_knights/knight'

module GameOfKnights
  class Knights
    attr_reader :database

    def initialize
      @database = [
        Knight.new('K1', 100),
        Knight.new('K2', 100),
        Knight.new('K3', 100),
        Knight.new('K4', 100),
        Knight.new('K5', 100),
        Knight.new('K6', 100)
      ]
    end

    def random_hitpoint
      Random.new.rand(1..6)
    end

    def fight(knight_a, knight_b)
      b_index = @database.index(knight_b)

      hitpoints = random_hitpoint

      @database[b_index].life = knight_b.life - hitpoints

      puts "Fighter #{knight_a.name} hits #{knight_b.name} with #{hitpoints} points."
      puts "#{knight_b.name} still has #{knight_b.life} life points."
      puts "#{knight_b.name} is dead" if knight_b.life.zero? || !knight_b.life.positive?
    end

    def game_on?
      @database.count { |knight| knight.life.positive? } > 1
    end

    def healthy?(knight)
      knight.life.positive?
    end

    def healthy_knight(current_idx)
      next_available = @database[current_idx + 1]
      if next_available.nil?
        healthy_knight(-1)
      elsif !healthy?(next_available)
        healthy_knight(current_idx + 1)
      else
        next_available
      end
    end

    def winner
      @database.find { |knight| knight.life.positive? }
    end
  end
end