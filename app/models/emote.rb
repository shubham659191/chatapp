class Emote < ApplicationRecord
  belongs_to :massage

  class Emoji
    # [{key: emoji.png, text: Emoji}, {}]
    # Emoji.all
    def self.all
      self.new.all
    end

    def all
      list_of_emojis
    end

    private

    def list_of_emojis
      Dir.children(emojis_path).map { |file| emoji_hash(file) }
    end

    def emojis_path
      Rails.root.join('app', 'assets', 'images', 'emojis')
    end

    def emoji_hash(file)
      { key: file, text: humanized(file) }
    end

    def humanized(file)
      basename(file).humanize
    end

    def basename(file)
      File.basename(file, File.extname(file))
    end
  end
  
end
