module GameOfKnights
  class Knight
    attr_reader :name

    attr_accessor :life

    def initialize(name, life)
      @name = name
      @life = life
    end
  end
end
