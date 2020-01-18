class User < ApplicationRecord
 # for one attachment
  # has_one_attached :avatar

  # or for many attachments
  has_many_attached :friends
end
