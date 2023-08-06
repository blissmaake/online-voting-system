require "application_system_test_case"

class VotingEventsTest < ApplicationSystemTestCase
  setup do
    @voting_event = voting_events(:one)
  end

  test "visiting the index" do
    visit voting_events_url
    assert_selector "h1", text: "Voting events"
  end

  test "should create voting event" do
    visit voting_events_url
    click_on "New voting event"

    fill_in "Candidates", with: @voting_event.candidates
    fill_in "Duration", with: @voting_event.duration
    fill_in "Eventsdescription", with: @voting_event.eventsDescription
    fill_in "Eventsname", with: @voting_event.eventsName
    click_on "Create Voting event"

    assert_text "Voting event was successfully created"
    click_on "Back"
  end

  test "should update Voting event" do
    visit voting_event_url(@voting_event)
    click_on "Edit this voting event", match: :first

    fill_in "Candidates", with: @voting_event.candidates
    fill_in "Duration", with: @voting_event.duration
    fill_in "Eventsdescription", with: @voting_event.eventsDescription
    fill_in "Eventsname", with: @voting_event.eventsName
    click_on "Update Voting event"

    assert_text "Voting event was successfully updated"
    click_on "Back"
  end

  test "should destroy Voting event" do
    visit voting_event_url(@voting_event)
    click_on "Destroy this voting event", match: :first

    assert_text "Voting event was successfully destroyed"
  end
end
