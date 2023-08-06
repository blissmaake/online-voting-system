# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_05_224628) do
  create_table "candidates", force: :cascade do |t|
    t.string "role"
    t.string "userName"
    t.integer "voting_event_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_candidates_on_user_id"
    t.index ["voting_event_id"], name: "index_candidates_on_voting_event_id"
  end

  create_table "feedbacks", force: :cascade do |t|
    t.text "message"
    t.integer "user_id", null: false
    t.integer "voting_event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_feedbacks_on_user_id"
    t.index ["voting_event_id"], name: "index_feedbacks_on_voting_event_id"
  end

  create_table "user_votes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "voting_event_id", null: false
    t.integer "candidate_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["candidate_id"], name: "index_user_votes_on_candidate_id"
    t.index ["user_id"], name: "index_user_votes_on_user_id"
    t.index ["voting_event_id"], name: "index_user_votes_on_voting_event_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "userName"
    t.string "email"
    t.string "password_digest"
    t.string "profile_picture"
    t.boolean "is_admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "voting_events", force: :cascade do |t|
    t.string "eventsName"
    t.text "eventsDescription"
    t.integer "duration"
    t.date "eventDate"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_voting_events_on_user_id"
  end

  add_foreign_key "candidates", "users"
  add_foreign_key "candidates", "voting_events"
  add_foreign_key "feedbacks", "users"
  add_foreign_key "feedbacks", "voting_events"
  add_foreign_key "user_votes", "candidates"
  add_foreign_key "user_votes", "users"
  add_foreign_key "user_votes", "voting_events"
  add_foreign_key "voting_events", "users"
end
